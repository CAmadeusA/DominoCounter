(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),m=n(7),v=n(6),u=(n(14),n(5)),l=n.n(u),h=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).count=-1,a.handleTakePhoto=function(e){a.setState({photo:e})},a.countDots=function(){var e=cv.imread("imgSrc"),t=e.clone(),n=new cv.MatVector,o=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(5,5),2,2),cv.Canny(e,e,25,75,3),cv.findContours(e,n,o,cv.RETR_LIST,cv.CHAIN_APPROX_NONE);for(var i=0;i<n.size();i++){var s=cv.contourArea(n.get(i)),m=cv.arcLength(n.get(i),!1),v=Math.abs(m/s);cv.contourArea(n.get(i))>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(i))/Math.PI)*Math.PI-cv.arcLength(n.get(i),!1))<8&&v-25<5&&c.push_back(n.get(i))}for(var u=0;u<c.size();u++){for(var l=cv.moments(c.get(u)),h=l.m10/l.m00,d=l.m01/l.m00,g=!1,f=u+1%c.size();f<c.size();f++){var w=cv.moments(c.get(f)),p=w.m10/w.m00,M=w.m01/w.m00,b=Math.abs(h-p)+1e-4,E=Math.abs(d-M)+1e-4,k=2*Math.sqrt(cv.contourArea(n.get(u))/Math.PI);if(b>0&&b<k&&E>0&&E<k){g=!0;break}}g||r.push_back(c.get(u))}for(var A=0;A<r.size();A++){for(var z=cv.moments(r.get(A)),I=z.m10/z.m00,O=z.m01/z.m00,P=!1,R=A+1%r.size();R<r.size();R++){var y=cv.moments(r.get(R)),C=y.m10/y.m00,S=y.m01/y.m00;I-C<1&&O-S<1&&(P=!0,document.getElementById("debug").innerText+="("+I+", "+O+") =?= ("+C+", "+S+")\n")}P||cv.drawContours(t,r,A,new cv.Scalar(255*(A%3===0?1:0),255*(A%3===1?1:0),255*(A%3===2?1:0),255),2)}a.count=r.size(),document.getElementById("result").innerText=a.count,cv.imshow("imgDst",t)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(l.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"(0.19) Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("div",{id:"debug"}),o.a.createElement("canvas",{id:"imgDst"}))}}]),n}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ed00911d.chunk.js.map