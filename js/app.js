let liVideos=document.querySelectorAll('ul li');

let category=document.querySelectorAll('.category');
let totalVideos=document.querySelectorAll('.totalVideos');
let title=document.querySelectorAll('.titleCategory');

let ul1=document.getElementById('list1');
let ul2=document.getElementById('list2');
let ul3=document.getElementById('list3');
let ul4=document.getElementById('list4');
let ul5=document.getElementById('list5');

function show(indice, numberList){
	let listUl=document.querySelector('#list'+numberList);
	
	let move=100;
	let leftPosition=-move;
	let rigthPosition=move;

	if(indice == 1) listUl.scrollBy(rigthPosition,0);
	
	if(indice == -1) listUl.scrollBy(leftPosition,0);
	
}

const url='videos.json';

function getDataCat(categoryId, list){
	fetch(url)
	.then(response => response.json())
	.then(date => {
		let currentIndex=categoryId-1;
		let allVideos=date.videos.length;

		for(i=0; i < allVideos; i++){
			if(date.videos[i].categoriaId == categoryId){
				createLiImg(list,categoryId,date.videos[i].videoId);
			}
			
		}

		let currentVideoTitle=date.videos[currentIndex].titulo;
		videosCounter(list, currentIndex, currentVideoTitle);
	})
}

getDataCat(1, ul1);
getDataCat(2, ul2);
getDataCat(3, ul3);
getDataCat(4, ul4);
getDataCat(5, ul5);


function createLiImg(list,categoryId,videoId){
	let ulEl=list;
	let li=document.createElement('li');
	ulEl.appendChild(li);

	let img=document.createElement('img');
	img.setAttribute('src', `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
	img.setAttribute('class', 'cover');
	img.setAttribute('click', `openModal("${videoId}")`);
	li.appendChild(img);
}

function videosCounter(list,currentIndex,titulo){
	//totalVideos[currentIndex].textContent=list.children.length;
	title[currentIndex].textContent=`${titulo} ${list.children.length}`;
}

let iframeVideo=document.getElementById('iframeVideo');

function openModal(videoId){
	location.href='#openModal';
	iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
}