const db = require("../model/index")
const Servicemodel = db.servicemodel


exports.create = (req, res) => {
  const serviceMessage = {
    src: req.body.src,
    title: req.body.title,
    price: req.body.price,
    type: req.body.type
  }
  Servicemodel.create(serviceMessage)
    .then(data => {
      res.send(Array(data))
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "创建信息出错"
      })
    })
}
//分页数组
const sliceArr = (arr, size) => {
  // arr是传入的要切割的数组
  // size是每个切割的数组有多少项
  var newArr = []
  for (var x = 0; x < Math.ceil(arr.length / size); x++) {
    var start = x * size
    var end = start + size
    newArr.push(arr.slice(start, end))
  }
  return newArr
}
exports.findAll = (req, res) => {
  Servicemodel.findAll().then((data) => {
    let List = sliceArr(data, 8)
    console.log(List)
    res.send(List)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}

//找第一个
exports.find_first = (req, res) => {
  Servicemodel.findAll({
    where: {
      type: 1
    }
  }
  ).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}
//找第二个
exports.find_second = (req, res) => {
  Servicemodel.findAll({
    where: {
      type: 2
    }
  }
  ).then((data) => {

    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "查询失败"
    })
  })
}



// item1: [
//   {
//     src: '/src/assets/项目分类/首页/图标/开荒保洁.png',
//     title: '开荒保洁'
//   },
//   {
//     src: '/src/assets/项目分类/首页/图标/大扫除.png',
//     title: '大扫除新'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/擦玻璃.png',
//     title: '擦玻璃'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/深度保洁.png',
//     title: '深度保洁'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/厨房保洁.png',
//     title: '厨房保洁'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/空调.png',
//     title: '空调清洗'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/油烟机清洗.png',
//     title: '油烟机清洗'
//   }, {
//     src: '/src/assets/项目分类/首页/图标/家电清洗.png',
//     title: '家电套餐'
//   }
// ],

//   item2: [
//     {
//       src: '/src/assets/项目分类/首页/图标/洗衣机.png',
//       title: '洗衣机清洗'
//     }, {
//       src: '/src/assets/项目分类/首页/图标/热水器清洗.png',
//       title: '热水器清洗'
//     }, {
//       src: '/src/assets/项目分类/首页/图标/卫生间清洗.png',
//       title: '卫生间清洗'
//     }, {
//       src: '/src/assets/项目分类/首页/图标/地板打蜡.png',
//       title: '地板打蜡'
//     }, {
//       src: '/src/assets/项目分类/首页/图标/地暖清洗.png',
//       title: '地暖清洗'
//     }, {
//       src: '/src/assets/项目分类/首页/图标/地毯清洗.png',
//       title: '地毯清洗'
//     }
//   ],
