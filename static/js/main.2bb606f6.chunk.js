(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),v=n(7),l=n(6),u=(n(14),n(5)),m=n.n(u),h=function(t){Object(v.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).count=-1,a.handleTakePhoto=function(t){a.setState({photo:t})},a.countDots=function(){var t=cv.imread("imgSrc"),e=t.clone(),n=new cv.MatVector,o=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector;cv.cvtColor(t,t,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(t,t,new cv.Size(5,5),2,2),cv.Canny(t,t,25,75,3),cv.findContours(t,n,o,cv.RETR_LIST,cv.CHAIN_APPROX_SIMPLE);for(var i=0;i<n.size();i++){var s=cv.contourArea(n.get(i)),v=cv.arcLength(n.get(i),!1),l=Math.abs(v/s);cv.contourArea(n.get(i))>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(i))/Math.PI)*Math.PI-cv.arcLength(n.get(i),!1))<7&&l-25<5&&c.push_back(n.get(i))}for(var u=0;u<c.size();u++){for(var m=cv.moments(c.get(u)),h=m.m10/m.m00,d=m.m01/m.m00,g=!1,f=u;f<c.size();f++){var w=cv.moments(c.get(f)),M=w.m10/w.m00,p=w.m01/w.m00,b=Math.abs(h-M),E=Math.abs(d-p),k=4*Math.sqrt(cv.contourArea(n.get(f))/Math.PI);if(b>0&&b<k&&E>0&&E<k){g=!0;break}}g||r.push_back(c.get(u))}for(var A=0;A<r.size();A++)cv.drawContours(e,r,A,new cv.Scalar(255*(A%3===0?1:0),255*(A%3===1?1:0),255*(A%3===2?1:0),255),3);a.count=r.size(),document.getElementById("result").innerText=a.count,cv.imshow("imgDst",e)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(m.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(e){t.handleTakePhoto(e)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("canvas",{id:"imgDst"}))}}]),n}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2bb606f6.chunk.js.map