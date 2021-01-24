'use strict';

// console.log(React);
//React.createElement(component, props, ...children)
// var header = React.createElement('div', {className:'header', id: 'hello'}, React.createElement('div', {className:'header', id: 'hello'}, 'Привет!'));


// class MyDiv extends React.Component{
//     render(){
//         return React.createElement(
//             'div',
//             {
//                 className:'good bye',
//                 id: this.props.id
//             },
//             "Text3"
//         );
//     }
// }
//
//
// ReactDOM.render(React.createElement(MyDiv, {id:'qwerty'}), document.querySelector('.root'));



/*ReactDOM.render(
    React.createElement('header', {}, null,
        React.createElement('img', {
            src:"https://img2.freepng.ru/20181212/ksb/kisspng-clip-art-logo-brand-point-huawei-5c11e13ac9abf8.9951106215446756428261.jpg",
            alt:"Huawei",
            title:"Я логотип",
            width:'80px'
        }), React.createElement('h1', {}, "Ковбасса INC"))
    , document.querySelector('.root'));*/


/*class Header extends React.Component {
    render() {
        return React.createElement('header', {className:'header'},
            'Меня зовут: ' + this.props.name      //пропсы - константны!!!!
        )
    }
}

//пропсы - передаются в компонент на момент его создания
ReactDOM.render(React.createElement(Header, {name:'Alex'} ), document.querySelector('.root'));*/


class Logo extends React.Component {
    render() {
        return React.createElement(
            'a',
            {
                className: 'navbar-brand',
                href: this.props.href
            },
            this.props.text, // Bootstrap
            React.createElement(
                'img',
                {
                src: this.props.imgSrc,
                className: 'd-inline-block align-top',
                width: this.props.width,
                height: this.props.height,
                alt: this.props.imgAlt,
                title: this.props.title,
                }
             )
        )
    }
}

class TogglerButton extends React.Component {
    render() {
        return React.createElement(
            'button', 
            {
                className:'navbar-toggler',
                'data-toggle':'collapse',
                'data-target':'#navbarSupportedContent',
                'aria-controls':"navbarSupportedContent",
                'aria-expanded':"false",
                'aria-label':"Toggle navigation"
            },            
            React.createElement(
                'span', 
                {
                    className:'navbar-toggler-icon'
                },
                null
            )
        )
    }
}

class NavigateElement extends React.Component { //nav-item
    render() {
        return React.createElement(
            'li', 
            {
                className:'nav-item active',            
            },            
            React.createElement(
                'a', 
                {
                    className:'nav-link',
                    href: this.props.href
                }, 
                this.props.text
            )
        )
    }
}

class NavigateMenuList extends React.Component{ //navbar-nav
    render() {
        return React.createElement(
            'ul', 
            {
                className:'navbar-nav mr-auto',            
            },            
            React.createElement(
                NavigateElement, 
                {
                    href:'/',
                    text: 'Главная'
                }, 
                null
            ),
            React.createElement(
                NavigateElement, 
                {
                    href:'/user/loginin',
                    text: 'Вход'
                }, 
                null
            ),
            React.createElement(
                NavigateElement, 
                {
                    href:'/user/register',
                    text: 'Регистрация'
                }, 
                null
            )            
        )
    }
}

class SearchForm extends React.Component{
    render() {
        return React.createElement(
            'form', 
            {
                className:'form-inline my-2 my-lg-0',
            },           
            React.createElement(
                'input', 
                {
                    className:'form-control mr-sm-2',
                    type: 'search',
                    placeholder: 'Search'                                        
                }
            ),
            React.createElement(
                'button', 
                {
                    className:'btn btn-outline-success my-2 my-sm-0',
                    type: 'submit'                                                           
                }, 
                'Search'
            )
        )
    }
}

class NavbarCollection extends React.Component{
    render() {
        return React.createElement(
            'div', 
            {
                className:'collapse navbar-collapse',
                id: 'navbarSupportedContent'            
            },            
            React.createElement(
                NavigateMenuList, 
                {}, 
                null
            ),
            React.createElement(
                SearchForm, 
                {}, 
                null
            )
        )
    }
}

class Navbar extends React.Component{
    render() {
        return React.createElement(
            'nav', 
            {
                className:'navbar navbar-expand-lg navbar-light bg-light'
            },            
            React.createElement(
                Logo, 
                {
                    href:'/',
                    text:'Моя Инкорпорейшин',
                    imgSrc:'static/images/logo.png',
                    width:'30',
                    height:'30',
                    imgAlt:'логотип',
                    title:'Моя Инкорпорейшин и Ко'
                }, 
                null
            ),
            React.createElement(
              TogglerButton,
                {}
            ),
            React.createElement(
                NavbarCollection, 
                {}, 
                null
            )
        )
    }
}


// ReactDOM.render(React.createElement(NavigateMenuList, {}), document.querySelector('.root'));
ReactDOM.render(React.createElement(
    Navbar,{}), document.querySelector('.root'));


/*
ReactDOM.render(React.createElement(Logo, {
    href:'/',
    text:'Моя Инкорпорейшин',
    imgSrc:'static/images/logo.png',
    width:'30',
    height:'30',
    imgAlt:'логотип',
    title:'Моя Инкорпорейшин и Ко'
} ), document.querySelector('.root'));*/

