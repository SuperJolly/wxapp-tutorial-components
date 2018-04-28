Component({

    behaviors: [],

    properties: {
        myProperty: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
            observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        },
        myProperty2: String // 简化的定义方式
    },
    data: {
        text: "Hello,World!"
    }, // 私有数据，可用于模版渲染

    created: function() {   // 设置setData不会导致重绘,被挂载到节点树前触发
        console.log(this);
        // this.setData({
        //     text: "Hello,China!"
        // })
    },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { // 可以设置setData更新数据，但是无法获取到节点信息(未render) 
        console.log(this);
        this.setData({
            text: "Hello, China!"
        });
    },
    ready: function() {     // render完毕, 可获取节点信息
        console.log(this);
    },
    moved: function() {    // 组件实例在节点树中的位置变化时触发
        console.log('组件位置变化了!');
    },
    detached: function() { // 组件实例从节点树中移除
        console.log('移除组件!');
    },

    methods: {
        onMyButtonTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            })
        },
        _myPrivateMethod: function () {
            // 内部方法建议以下划线开头
            this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData') // 这里将 data.A[0].B 设为 'myPrivateData'
            this.applyDataUpdates()
        },
        _propertyChange: function (newVal, oldVal) {

        }
    }

})