// window.addEventListener("DOMContentLoaded",() => {
//     // 获取标题 前往下载 gotoDown
// const gotoDown = document.getElementById('gotoDown')

// // 获取所有img并添加load
// const imgs = document.getElementsByClassName('articleImg')
// console.log("imgs:",imgs);
// // 遍历所有图片元素并为它们添加load事件监听器
// for (let i = 0; i < imgs.length; i++) {
//     console.log("img"+i+":",imgs[i]);
//     imgs[i].addEventListener('load',() => {
//         console.log("img"+i+"load");
//         imgs[i].style.display = 'block'
//         // 隐藏 img_load
//         document.getElementById('img_load_'+imgs[i].id).style.display='none'
//     })
// }

// gotoDown.addEventListener('click',() => {
//     const downLoad = document.getElementById('downLoad')
//     downLoad.scrollIntoView({behavior:'smooth'})
// })

// function goLink(link){
//     document.location.href = link
// }

// })
const menuCheckArticle = document.getElementById('menuCheck')

  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        if(menuCheckArticle != undefined && menuFlag == 0){
            menuCheckArticle.checked = false;
        }
    } else {
        if(menuCheckArticle != undefined && menuFlag == 0){
            menuCheckArticle.checked = false;
        }
    }
    

  });


// 获取标题 前往下载 gotoDown
const gotoDown = document.getElementById('gotoDown')


if(gotoDown != null){
    gotoDown.addEventListener('click',() => {
        const downLoad = document.getElementById('downLoad')
        downLoad.scrollIntoView({behavior:'smooth'})
    })
}


function goLink(link){
    document.location.href = link
}

const articleTags = document.getElementById('articleTags')
if(articleTags != undefined){
    const tags = articleTags.children;
    for(let i = 0; i < tags.length; i++){
        tags[i].addEventListener('click',() => {
            // 搜索标签
            let ref = '../../index.html?search='+tags[i].innerHTML
            window.location.href = ref
        })
    }
}

const articleTagTus = document.getElementById('articleTagTus')
if(articleTagTus != undefined){
    const tagTus = articleTagTus.children;
    for(let i = 0; i < tagTus.length; i++){
        tagTus[i].addEventListener('click',() => {
            // 搜索标签
            let ref = '../../html/18tu.html?text='+tagTus[i].innerHTML
            window.location.href = ref
        })
    }
}
