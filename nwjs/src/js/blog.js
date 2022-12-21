const idString = window.location.href.split('/').pop().split('.').shift();
const id = Number(idString);

console.log(database);

//============================== サーチ =====================================
const params = {
    tag:"",
    keyword:""
}
const decodeParams = decodeURI(location.search);
paramsTag = decodeParams.match(/tag=([^&]+)/);
paramsKeyword = decodeParams.match(/keyword=([^&]+)/);
params.tag = paramsTag ? paramsTag[1] : "";
params.keyword = paramsKeyword ? paramsKeyword[1] : "";
if(params.tag){
    document.getElementById("select_tag").value = params.tag;
}
document.getElementById("search_text").value.value = params.keyword;

const serchParams = function(){
    let result = database;
    let articleHead = "";
    if(params.tag && params.tag !== "全てのタグ"){
        result = result.filter(e=>{
            return e.tags.includes(params.tag);
        });
    }
    if(params.keyword){
        result = result.filter(e=>{
            return e.title.includes(params.keyword);
        });
    }

    result.some((e, index)=>{
        if(index >= 20){
            // 1, 2, 3, といった20番目以上を表示するリンクを追加する処理を書く
            // return true;
        }
        let tagBlocks = "";
        e.tags.forEach(e2=>{
            tagBlocks = tagBlocks + `<a href="../../index.html?tag=${e2}" class="tagblock link-gray">
            <span class="material-icons">sell</span>${e2}</a>`
        });
        articleHead = `
        <a href="../../${String(e.number).padStart(5,"0")}.html">
        <div class="i-articlehead">
        <span class="i-date">${e.date}</span>
        <span class="i-modified">${e.modified}</span>
        <div class="i-title">${e.title}</div>
        <div class="i-tags">${tagBlocks}</div>
        </div>
        </a>\n` + articleHead;
        // console.log(articleHead)
    });
    // console.log(articleHead);
    document.getElementById("articles").innerHTML = articleHead;
}
if(params.tag || params.keyword){
    serchParams();
}

const serchKeyword = function() {
    console.log("serch");
    const elementTag = document.getElementById("select_tag").value;
    const elementKeyword = document.getElementById("search_text").value;
    if(!elementKeyword && elementTag === "全てのタグ"){
        console.log("NoInput");
        window.location.href = "../../index.html";
        return false;
    }
    params.tag = elementTag;
    params.keyword = elementKeyword;
    // window.location.search = "?" + new URLSearchParams(params).toString();
    window.location.href = "../../index.html?" + new URLSearchParams(params).toString();
    return false;
}



//============================== 関連記事 =====================================

const makeRelatedPages = function(){
    let articleHeads = "";
    let deleteIndex = 0;
    let thisIndex = database.findIndex(e=>e.number === id);
    // if(thisIndex === -1){thisIndex = 0}; //トップページの場合はurlがindexになるのでidがNaNになりthisIndexが-1になる。その時のエラー防止。
    const thisData = database[thisIndex];
    const thisDate = new Date(thisData.date);
    let  relatedDB = database.slice(0,database.length); 
    relatedDB.splice(thisIndex,1); //現在のページを除外
    relatedDB = relatedDB.filter(e=>e && e.public); //非公開ページを除外
    relatedDB.forEach((e,index)=>{
        let matchTagCount = 0;
        thisData.tags.forEach(e2=>{
            if(e.tags.includes(e2)){matchTagCount++};
        });
        const date = new Date(e.date);
        let relevance = (date - thisDate) / 86400000;
        if(Math.sign(relevance) === -1){
            relevance = (relevance * -1) +0.5;
        }
        relevance = (matchTagCount + 1) * 100000 - relevance;
        relatedDB[index].relevance = relevance;
    });
    relatedDB.sort((a,b)=>{
        return b.relevance - a.relevance;
    });

    let relatedPagesCount = 5; //関連記事表示数
    for(let i = 0; i < relatedPagesCount; i++){
        if(!relatedDB[i]){break;}
        const e = relatedDB[i];
        let tagBlocks = "";
        e.tags.forEach(e2=>{
            tagBlocks = tagBlocks + `<a href="../../index.html?tag=${e2}" class="tagblock link-gray">
            <span class="material-icons">sell</span>${e2}</a>`
        });
        articleHeads = articleHeads + `
        <a href="../../${String(e.number).padStart(5,"0")}.html">
        <div class="i-articlehead">
        <span class="i-date">${e.date}</span>
        <span class="i-modified">${e.modified}</span>
        <div class="i-title">${e.title}</div>
        <div class="i-tags">${tagBlocks}</div>
        </div>
        </a>\n`;
    }
    return articleHeads;
}
if(idString !== "index"){
    document.getElementById("articles").innerHTML = makeRelatedPages();
}


//============================== コメント欄 =====================================

// const commentHtml = `
// <form id="commentForm">
// <h4><span class="material-icons">forum</span>コメント</h4>
// <textarea id="commentInput" placeholder="コメント" required></textarea><br>
// <input type="button" value="書き込む" onclick="postForm();"/>
// </form>
// <div id="comments"></div>`

// let elementComment = document.getElementById('commentArea');
// if(elementComment){elementComment.insertAdjacentHTML('beforeend', commentHtml);};


//user
const postForm = function(){
    fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json =>{
        const userId = hush(json.ip);
        postFormAfter(userId);
    });
}
function hush(value){
    let result = value.split(".");
    result = result.map(e =>e.padStart(3, 0));
    result[0] = result[0].slice(1, 3);
    result[1] = result[1].slice(1, 3);
    result[2] = result[2].slice(1, 3);
    result[3] = result[3].slice(0, 2);
    result = result.join('');
    result = Number(result).toString(16);
    return result;
}
function postFormAfter(userId) {
    const targetData = {
        id : window.location.href.split('/').pop().split('.').shift(),
        title : window.document.title
    };
    const targetDataJson = JSON.stringify(targetData);
    
    //テキストエリアの中身とuserとターゲットを送信
    let commentInput = document.getElementById('commentInput').value;
    // console.log(commentInput);
 
    const form = document.createElement('form');
    const comment = document.createElement('input');
    const target = document.createElement('input');
    const user = document.createElement('input');
 
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycby8-qxnJqe6aLq7wgZkUigocMPUL4DVHlKwNLwwPPu4IrCPiwkFoeL4uz9hffdcUGNu/exec';
 
    comment.type = 'hidden'; //入力フォームが表示されないように
    comment.name = 'comment';
    comment.value = commentInput;

    target.type = 'hidden'; //入力フォームが表示されないように
    target.name = 'target';
    target.value = targetDataJson;

    user.type = 'hidden'; //入力フォームが表示されないように
    user.name = 'user';
    user.value = userId;
 
    form.appendChild(comment);
    form.appendChild(target);
    form.appendChild(user);
    document.body.appendChild(form);

    if(commentInput!==""){form.submit();
    }else{alert("コメントを入力して下さい。")};
};


//GASのAPIのURL
const endpoint = "https://script.google.com/macros/s/AKfycby8-qxnJqe6aLq7wgZkUigocMPUL4DVHlKwNLwwPPu4IrCPiwkFoeL4uz9hffdcUGNu/exec";
//APIを使って非同期データを取得する
fetch(endpoint)
.then(response => response.json())
/*成功した処理*/
.then(data => {
    //JSONから配列に変換
    const obj = data;
    
    let documentComments = "";
    let countNumber=0;
    obj.forEach((e,index)=>{
        const targetData = JSON.parse(e.target);
        obj[index].id = targetData.id;
        obj[index].title = targetData.title;
    });
    const thisId = window.location.href.split('/').pop().split('.').shift();
    obj.forEach((e,index)=> {
        if(e.id === thisId){
            countNumber=countNumber+1;
            const isoDate = new Date(e.date);
            const localeDate=isoDate.toLocaleDateString('ja-JP', {timeZone:'Asia/Tokyo',hour:'numeric',minute:'numeric',second:'numeric'});
            const convertComment=e.comment.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
            documentComments='<span class="comment-number">'+countNumber+"</span>"+'<span class="comment-date">'+localeDate+"</span>"
            +"<br>"+'<div class="comment-text">'+convertComment+"</div>"+documentComments;
        };
    });

    let elementComments = document.getElementById('comments');
    if(elementComments){elementComments.insertAdjacentHTML('beforeend', documentComments);};
    
});

