(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),m=n(7),v=n(6),u=(n(14),n(5)),l=n.n(u),h=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).count=-1,a.handleTakePhoto=function(e){a.setState({photo:e})},a.countDots=function(){document.getElementById("result").innerText="";var e=cv.imread("imgSrc"),t=e.clone(),n=new cv.MatVector,o=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector,i=new cv.MatVector;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(3,3),2,2),cv.Canny(e,e,50,85,3),cv.findContours(e,n,o,cv.RETR_LIST,cv.CHAIN_APPROX_NONE);for(var s=0;s<n.size();s++){var m=cv.contourArea(n.get(s)),v=cv.arcLength(n.get(s),!1),u=Math.abs(v/m);cv.contourArea(n.get(s))>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(s))/Math.PI)*Math.PI-cv.arcLength(n.get(s),!1))<8&&u-25<5?c.push_back(n.get(s)):Math.abs(u-2)<.5&&(document.getElementById("debug").innerText+="Found Rectangle \n",i.push_back(n.get(s)))}for(var l=0;l<c.size();l++){for(var h=cv.moments(c.get(l)),d=h.m10/h.m00,g=h.m01/h.m00,w=!1,b=l+1%c.size();b<c.size();b++){var f=cv.moments(c.get(b)),M=f.m10/f.m00,p=f.m01/f.m00,E=Math.abs(d-M)+1e-4,k=Math.abs(g-p)+1e-4,A=2*Math.sqrt(cv.contourArea(n.get(l))/Math.PI);if(E>0&&E<A&&k>0&&k<A){w=!0;break}}w||r.push_back(c.get(l))}a.count=r.size()+1;for(var I=0;I<r.size();I++){for(var y=cv.moments(r.get(I)),z=y.m10/y.m00,P=y.m01/y.m00,R=(I+1)%r.size();R<r.size();R++){var O=cv.moments(r.get(R)),S=O.m10/O.m00,T=O.m01/O.m00;Math.abs(z-S)<1&&Math.abs(P-T)<1&&a.count--}cv.drawContours(t,r,I,new cv.Scalar(255,0,0,255),2)}for(var _=0;_<i.size();_++){var x=cv.boundingRect(i.get(_)),B=new cv.Point(x.x,x.y),C=new cv.Point(x.x+x.width,x.y+x.height);cv.rectangle(t,B,C,new cv.Scalar(0,255,0,255),2,cv.LINE_AA,0)}document.getElementById("result").innerText=a.count,cv.imshow("imgDst",t)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(l.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"(0.31) Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("div",{id:"debug"}),o.a.createElement("canvas",{id:"imgDst"}))}}]),n}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d63facf4.chunk.js.map