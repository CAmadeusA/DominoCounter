(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),l=n(7),u=n(6),v=(n(14),n(5)),h=n.n(v),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).count=-1,o.handleTakePhoto=function(e){o.setState({photo:e})},o.countDots=function(){var e=cv.imread("imgSrc"),t=e.clone(),n=new cv.MatVector,a=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(5,5),2,2),cv.Canny(e,e,25,75,3),cv.findContours(e,n,a,cv.RETR_EXTERNAL,cv.CHAIN_APPROX_SIMPLE);for(var i=0;i<n.size();i++){var s=cv.contourArea(n.get(i)),l=cv.arcLength(n.get(i),!1),u=Math.abs(l/s);cv.contourArea(n.get(i))>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(i))/Math.PI)*Math.PI-cv.arcLength(n.get(i),!1))<9&&u-25<5&&c.push_back(n.get(i))}for(var v=0;v<c.size();v++)cv.drawContours(t,r,v,new cv.Scalar(255*(v%3===0?1:0),255*(v%3===1?1:0),255*(v%3===2?1:0),255),3);o.count=r.size(),document.getElementById("result").innerText=o.count,cv.imshow("imgDst",t)},o.state={photo:""},o}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),a.a.createElement("div",null,a.a.createElement(h.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),a.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),a.a.createElement("div",null,"(0.04) Amount: ",a.a.createElement("div",{id:"result"})),a.a.createElement("canvas",{id:"imgDst"}))}}]),n}(a.a.Component);var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.42750d6c.chunk.js.map