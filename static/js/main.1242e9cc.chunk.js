(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),i=(a(13),a(3)),s=a(4),v=a(7),u=a(6),l=(a(14),a(5)),m=a.n(l),h=function(t){Object(v.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).count=-1,n.handleTakePhoto=function(t){n.setState({photo:t})},n.countDots=function(){var t=cv.imread("imgSrc"),e=t.clone(),a=new cv.MatVector,o=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector;cv.cvtColor(t,t,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(t,t,new cv.Size(5,5),2,2),cv.Canny(t,t,25,75,3),cv.findContours(t,a,o,cv.RETR_LIST,cv.CHAIN_APPROX_SIMPLE);for(var i=0;i<a.size();i++){var s=cv.contourArea(a.get(i)),v=cv.arcLength(a.get(i),!1),u=Math.abs(v/s);cv.contourArea(a.get(i))>50&&Math.abs(2*Math.sqrt(cv.contourArea(a.get(i))/Math.PI)*Math.PI-cv.arcLength(a.get(i),!1))<7&&u-25<5&&c.push_back(a.get(i))}for(var l=0;l<c.size();l++){for(var m=cv.moments(c.get(l)),h=m.m10/m.m00,g=m.m01/m.m00,d=cv.contourArea(a.get(l)),M=cv.arcLength(a.get(l),!1),f=!1,w=l;w<c.size();w++){var p=cv.moments(c.get(w)),b=p.m10/p.m00,E=p.m01/p.m00,A=Math.abs(h-b),k=Math.abs(g-E),I=2*Math.sqrt(cv.contourArea(a.get(w))/Math.PI),P=cv.contourArea(a.get(w)),L=cv.arcLength(a.get(w),!1),R=Math.abs(d-P),S=Math.abs(M-L);if(A>0&&A<I&&k>0&&k<I&&R<.05&&S<.05){f=!0;break}}f||r.push_back(c.get(l))}for(var C=0;C<r.size();C++)cv.drawContours(e,r,C,new cv.Scalar(255*(C%3===0?1:0),255*(C%3===1?1:0),255*(C%3===2?1:0),255),3);n.count=r.size(),document.getElementById("result").innerText=n.count,cv.imshow("imgDst",e)},n.state={photo:""},n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(m.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(e){t.handleTakePhoto(e)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("canvas",{id:"imgDst"}))}}]),a}(o.a.Component);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1242e9cc.chunk.js.map