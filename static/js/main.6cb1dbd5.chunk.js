(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),m=n(7),v=n(6),l=(n(14),n(5)),u=n.n(l),h=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).count=-1,a.handleTakePhoto=function(e){a.setState({photo:e})},a.countDots=function(){var e=cv.imread("imgSrc"),t=cv.zeros(e.size(),cv.CV_8UC3),n=(e.clone(),new cv.MatVector),o=new cv.MatVector,c=new cv.MatVector,r=new cv.Mat;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(3,3),2,2),cv.Canny(e,e,25,75,3),cv.findContours(e,n,r,cv.RETR_LIST,cv.CHAIN_APPROX_SIMPLE);for(var i=0;i<n.size();i++){var s=cv.contourArea(n.get(i)),m=cv.arcLength(n.get(i),!1),v=Math.abs(m/s);cv.contourArea(n.get(i))>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(i))/Math.PI)*Math.PI-cv.arcLength(n.get(i),!1))<7&&v-25<5&&o.push_back(n.get(i))}for(var l=0;l<o.size();l++){for(var u=cv.moments(o.get(l)),h=u.m10/u.m00,d=u.m01/u.m00,g=!1,f=l;f<o.size();f++){var w=cv.moments(o.get(f)),M=w.m10/w.m00,p=w.m01/w.m00,b=Math.abs(h-M),E=Math.abs(d-p),k=2*Math.sqrt(cv.contourArea(n.get(f))/Math.PI);if(b>0&&b<k&&E>0&&E<k){g=!0;break}}g||c.push_back(o.get(l))}for(var A=0;A<c.size();A++){var C=cv.moments(o.get(A));C.m10,C.m00,C.m01,C.m00;cv.drawContours(t,c,A,new cv.Scalar(255,0,0,255),3)}a.count=c.size(),document.getElementById("result").innerText=a.count,cv.imshow("imgDst",t)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(u.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("canvas",{id:"imgDst"}))}}]),n}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6cb1dbd5.chunk.js.map