(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),i=(n(13),n(3)),s=n(4),v=n(7),m=n(6),l=(n(14),n(5)),u=n.n(l),h=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).count=-1,a.handleTakePhoto=function(e){a.setState({photo:e})},a.countDots=function(){document.getElementById("result").innerText="";var e=cv.imread("imgSrc"),t=e.clone(),n=new cv.MatVector,c=new cv.Mat,o=new cv.MatVector,r=new cv.MatVector,i=new cv.MatVector;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(3,3),2,2),cv.Canny(e,e,50,90,3),cv.findContours(e,n,c,cv.RETR_LIST,cv.CHAIN_APPROX_NONE);for(var s=0;s<n.size();s++){var v=cv.contourArea(n.get(s)),m=cv.arcLength(n.get(s),!1),l=Math.abs(m/v);v>50&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(s))/Math.PI)*Math.PI-cv.arcLength(n.get(s),!1))<8&&l-25<5?o.push_back(n.get(s)):v>200&&Math.abs(l-2)<2&&i.push_back(n.get(s))}for(var u=0;u<o.size();u++){for(var h=cv.moments(o.get(u)),d=h.m10/h.m00,g=h.m01/h.m00,f=!1,w=u+1%o.size();w<o.size();w++){var b=cv.moments(o.get(w)),M=b.m10/b.m00,p=b.m01/b.m00,E=Math.abs(d-M)+1e-4,z=Math.abs(g-p)+1e-4,k=2*Math.sqrt(cv.contourArea(n.get(u))/Math.PI);if(E>0&&E<k&&z>0&&z<k){f=!0;break}}f||r.push_back(o.get(u))}a.count=r.size()+1;for(var A=0,R=0;R<r.size();R++){for(var I=cv.moments(r.get(R)),y=I.m10/I.m00,S=I.m01/I.m00,C=(R+1)%r.size();C<r.size();C++){var O=cv.moments(r.get(C)),P=O.m10/O.m00,T=O.m01/O.m00;Math.abs(y-P)<1&&Math.abs(S-T)<1&&a.count--}for(var _=!1,x=0;x<i.size();x++){var B=cv.minAreaRect(i.get(R)),L=B.center,D=B.size.width>B.size.height?B.size.width:2*B.size.height,N=L.x-D,j=L.x+D,V=L.y-D,G=L.y+D;if(y>N&&y<j&&S>V&&S<G){_=!0,document.getElementById("debug").innerText+="Found dot in rectangle at: ("+y+", "+S+") \n";break}}_&&A++,cv.drawContours(t,r,R,new cv.Scalar(255,0,0,255),2),cv.circle(t,S,3,new cv.Scalar(0,0,255,255),2)}for(var q=0;q<i.size();q++){for(var F=cv.minAreaRect(i.get(q)),J=cv.RotatedRect.points(F),W=0;W<4;W++)cv.line(t,J[W],J[(W+1)%4],new cv.Scalar(0,255,0,255),2,cv.LINE_AA,0);cv.circle(t,F.center,3,new cv.Scalar(0,0,255,255),2)}document.getElementById("result").innerText="Counted: "+a.count+", and verified: "+A,cv.imshow("imgDst",t)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),c.a.createElement("div",null,c.a.createElement(u.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),c.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),c.a.createElement("div",null,"(0.31.8) Amount: ",c.a.createElement("div",{id:"result"})),c.a.createElement("div",{id:"debug"}),c.a.createElement("canvas",{id:"imgDst"}))}}]),n}(c.a.Component);var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3b62cfd6.chunk.js.map