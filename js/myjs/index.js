Vue.component('navbar',{
    template:'<div id="app">\n' +
        '    <nav class="navbar navbar-expand-md navbar-light bg-light">\n' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#c1">\n' +
        '            <span class="navbar-toggler-icon"></span>\n' +
        '        </button>\n' +
        '        <a class="navbar-brand" href="#">宿管云</a><span class="badge badge-dark">定义新社交</span>\n' +
        '        <div id="c1" class="collapse navbar-collapse justify-content-end">\n' +
        '            <form class="form-inline">\n' +
        '                <input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search">\n' +
        '                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>\n' +
        '            </form>\n' +
        '            <ul class="nav navbar-nav">\n' +
        '                <li class="navbar-item">\n' +
        '                    <a class="nav-link" href="#">控制台</a>\n' +
        '                </li>\n' +
        '                <li class="navbar-item">\n' +
        '                    <a class="nav-link" href="#">最新版本</a>\n' +
        '                </li>\n' +
        '                <li class="navbar-item">\n' +
        '                    <a class="nav-link" href="#">合作伙伴</a>\n' +
        '                </li>\n' +
        '                <li class="navbar-item">\n' +
        '                    <a class="nav-link" href="#">登陆</a>\n' +
        '                </li>\n' +
        '                <button class="btn btn-secondary" type="submit">免费注册</button>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </nav>\n' +
        '</div>'
})

var app = new Vue({
    el: '#app',
    data: {

    }
})
