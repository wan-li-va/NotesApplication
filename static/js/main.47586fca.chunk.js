(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(25),s=n.n(i),r=(n(33),n(21)),c=n(7),l=n(8),u=n(10),p=n(9),d=(n(34),n(17)),m=n.n(d),h=(n(36),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleClick=function(){if(""!==a.state.title||""!==a.state.content){var e={title:a.state.title,description:a.state.description,content:a.state.content,time:m()().calendar(),key:Date.now(),index:a.props.notes.length};a.props.addNote(e),a.setState({title:"",content:"",description:""})}},a.state={title:"",description:"",content:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"NewNote"},o.a.createElement("div",{className:"heading"},o.a.createElement("label",null,"Title: "),o.a.createElement("input",{className:"title",id:"noteTitle",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),o.a.createElement("label",{className:"descriptionHeader"},"Description: "),o.a.createElement("input",{className:"description",id:"noteInput",type:"text",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),o.a.createElement("label",{className:"noteHeader"},"Note: "),o.a.createElement("textarea",{className:"content",id:"noteContent",value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}}),o.a.createElement("button",{className:"button",onClick:this.handleClick},"Save Note"))}}]),n}(o.a.Component)),v=n(76),f=n(75),N=(n(37),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeCard=function(){var e={title:a.state.title,content:a.state.content,description:a.state.description,time:m()().calendar()};a.props.editNote(e,a.props.index),a.setState({isEditing:!1})},a.state={title:a.props.note.title,content:a.props.note.content,description:a.props.note.description,isEditing:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Note"},o.a.createElement(v.a,null,o.a.createElement(f.a,{id:"card"},this.state.isEditing?o.a.createElement("div",null,o.a.createElement("div",{className:"labels"},o.a.createElement("input",{className:"title",type:"text",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title}),o.a.createElement("input",{className:"description",type:"text",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description}),o.a.createElement("textarea",{className:"content",onChange:function(t){return e.setState({content:t.target.value})},value:this.state.content})),o.a.createElement("p",null," ",this.props.note.time," "),o.a.createElement("button",{onClick:this.changeCard},"Save Edits"),o.a.createElement("button",{onClick:function(){return e.props.removeNote(e.props.note)}},"Delete Note")):o.a.createElement("div",null,o.a.createElement("p",null,"Title: ",this.state.title),o.a.createElement("p",null,"Description: ",this.state.description),o.a.createElement("p",null,"Date: ",this.props.note.time),o.a.createElement("p",null,"Note: ",this.state.content),o.a.createElement("button",{className:"button",onClick:function(){return e.setState({isEditing:!0})}},"Edit Note"),o.a.createElement("button",{onClick:function(){return e.props.removeNote(e.props.note)}},"Delete Note")))))}}]),n}(a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.notes.map((function(t,n){return o.a.createElement(N,{index:n,note:t,editNote:e.props.editNote,removeNote:e.props.removeNote,notes:e.props.notes})}));return o.a.createElement("div",{className:"NoteList"},t)}}]),n}(a.Component),E=n(20),g=n.n(E);n(56),n(57);g.a.initializeApp({apiKey:"AIzaSyBo22edHcyvvcx733QILfGs6AuXkOVSqHk",authDomain:"notesapplication-74fdb.firebaseapp.com",databaseURL:"https://notesapplication-74fdb.firebaseio.com",projectId:"notesapplication-74fdb",storageBucket:"notesapplication-74fdb.appspot.com",messagingSenderId:"496447756319",appId:"1:496447756319:web:e0a9e0cace8376a9809d2a",measurementId:"G-CGGBQZE2GJ"});var C=g.a,k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).addNote=function(e){var t=[].concat(Object(r.a)(a.state.notes),[e]);a.setState((function(e){return{notes:t}})),a.state.database.set(t)},a.removeNote=function(e){var t=a.state.notes.filter((function(t){return t.key!==e.key}));console.log(t),console.log(a.state.notes),a.setState((function(e){return{notes:t}})),a.state.database.child(e.index).remove()},a.editNote=function(e,t){var n=Object(r.a)(a.state.notes);n[t]=e,a.setState({notes:n}),a.state.database.set(n)},a.state={notes:[],database:C.database().ref("notes")},a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Create a New Note: "),o.a.createElement(h,{addNote:this.addNote,notes:this.state.notes}),o.a.createElement("h1",null,"Your Current Notes: "),o.a.createElement(b,{notes:this.state.notes,removeNote:this.removeNote,editNote:this.editNote}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.47586fca.chunk.js.map