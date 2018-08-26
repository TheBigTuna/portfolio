webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Projects, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'content-section-heading text-center' },
            _react2.default.createElement(
              'h2',
              { className: 'mb-5 mt-3', id: 'test' },
              'Projects'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row no-gutters' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project1/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/polar.png', height: '300px', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://sybeq.com/html/home.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/SybeqSite.png', height: '300px', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project3/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/Untitled.png', height: '300px', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: 'http://octaviusmoore.com/project4/index.html', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'images/youtube.png', height: '300px', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: '#', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg', height: '300px', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'a',
                { className: 'portfolio-item', href: '#', target: '_blank' },
                _react2.default.createElement('img', { className: 'img-fluid projectImg', src: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg', height: '300px', alt: '' })
              )
            )
          )
        )
      );
    }
  }]);

  return Projects;
}(_react2.default.Component);

exports.default = Projects;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Navbar = __webpack_require__(99);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Projects = __webpack_require__(100);

var _Projects2 = _interopRequireDefault(_Projects);

var _Footer = __webpack_require__(97);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Octavius'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'navScroll',
    value: function navScroll() {
      var posTop = window.scrollTo(0, 0);
      document.addEventListener("scroll", function () {
        var navSec = document.getElementById('navSec');
        var navMobile = document.getElementById('navMobile');
        var navText1 = document.getElementById('navText1');
        var pos = pageYOffset;
        var navList1 = document.getElementById('navList1');
        var navList2 = document.getElementById('navList2');
        var navList3 = document.getElementById('navList3');
        var navList4 = document.getElementById('navList4');

        if (pos < 100) {
          navSec.style.backgroundColor = "#0575e6";
          navSec.style.borderBottom = "none";
          navText1.style.color = "white";
          navList1.style.color = "white";
          navList2.style.color = "white";
          navList3.style.color = "white";
          navList4.style.color = "white";
        } else {
          navSec.style.backgroundColor = "white";
          navSec.style.borderBottom = ".5px solid rgba(0,0,0,0.6)";
          navMobile.style.backgroundColor = "#0575e6";
          navText1.style.color = "black";
          navList1.style.color = "black";
          navList2.style.color = "black";
          navList3.style.color = "black";
          navList4.style.color = "black";
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onScroll: this.navScroll() },
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Projects2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'footer',
          { className: 'py-5 mt-5', id: 'footerSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'm-0 text-center text-white footerText' },
              '2018 @OctaviusMoore.com'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'masthead d-flex' },
          _react2.default.createElement(
            'div',
            { className: 'container text-center my-auto' },
            _react2.default.createElement(
              'h1',
              { className: 'mb-1' },
              'I\'m Octavius'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'mb-5' },
              'Front End web Developer'
            )
          ),
          _react2.default.createElement('div', { className: 'overlay' })
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-lg navbar-dark navbar-custom fixed-top', id: 'navSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'navbar-brand', id: 'navText1' },
              'Octavius'
            ),
            _react2.default.createElement(
              'button',
              { className: 'navbar-toggler', id: 'navMobile', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarResponsive', 'aria-controls': 'navbarResponsive', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
              _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarResponsive' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav ml-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList1', href: '#menuSec' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList2', href: '#aboutSec' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList3', href: '#locationSec' },
                    'Projects'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', id: 'navList4', href: '#contactSec' },
                    'Contact'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ })

},[102]);