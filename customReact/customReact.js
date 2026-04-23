const { Children } = require("react")

function customRender(reactElement,container){
   /* const domElement=document.createElement(reactElement.type)
                     domElement.innerHTML=reactElement.Children
                     domElement.setAttribute('href',reactElement.props.href)
                     domElement.setAttribute('target',reactElement.props.target)

                     container.appendChild(domElement)*/
                     
                     const domElement=document.createElement(reactElement.type)
                     domElement.innerHTML=reactElement.Children
                     for(const prop in reactElementprops){
                        if(prop==='children') continue;
                        domElement.setAttribute(prop,reactElement.props[prop])
                     }
                     container.appendChild(domElement)

}



const reactElement={ 
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank',
    },
    Children:'click me to visit google'

}

const mainContiner=document.querySelector('#root')

customRender(reactElement,mainContiner)
