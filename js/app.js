const {createApp} = Vue

createApp({
    data() {
        return {
            version: '1.2.0',
            pro: {
                xiuWei: 0,
                tiZhi: 0,
                wuKang: 0,
                faKang: 0,
                wu: 0,
                jin: 0,
                mu: 0,
                shui: 0,
                huo: 0,
                tu: 0,
                lei: 0,
                du: 0,
                wuJian: 0,
                faJian: 0,
                zuiZhong: 0
            },
            bossData:{"1":{"data":[{"te":400,"fa":1300,"type":"lei","wu":1300}],"name":"凡人升练气"},"2":{"data":[{"te":1000,"fa":0,"type":"lei","wu":4200}],"name":"练气升筑基"},"3":{"data":[{"te":1100,"fa":4300,"type":"shui","wu":0}],"name":""},"4":{"data":[{"te":2000,"fa":0,"type":"lei","wu":11000}],"name":"筑基升金丹"},"5":{"data":[{"te":2500,"fa":12000,"type":"tu","wu":0}],"name":""},"6":{"data":[{"te":4800,"fa":0,"type":"lei","wu":20200}],"name":"金丹升元婴"},"7":{"data":[{"te":5500,"fa":22000,"type":"mu","wu":0},{"te":6000,"fa":23000,"type":"shui","wu":23000}],"name":""},"8":{"data":[{"te":9500,"fa":0,"type":"lei","wu":46000}],"name":"元婴升化神"},"9":{"data":[{"te":10500,"fa":47000,"type":"jin","wu":0},{"te":11000,"fa":43000,"type":"huo","wu":45000}],"name":""},"10":{"data":[{"te":22000,"fa":67000,"type":"lei","wu":67000}],"name":"化神升寂灭"},"11":{"data":[{"te":23000,"fa":75000,"type":"du","wu":0},{"te":25000,"fa":69000,"type":"tu","wu":69000}],"name":""},"12":{"data":[{"te":27000,"fa":0,"type":"tu","wu":120000}],"name":"寂灭升大乘"},"13":{"data":[{"te":30500,"fa":105000,"type":"shui","wu":105000},{"te":30000,"fa":125000,"type":"huo","wu":0},{"te":32000,"fa":110000,"type":"lei","wu":110000}],"name":""},"14":{"data":[{"te":40000,"fa":225000,"type":"jin","wu":195000}],"name":"大乘升飞升"},"15":{"data":[{"te":49500,"fa":185000,"type":"mu","wu":210000},{"te":50000,"fa":180000,"type":"shui","wu":220000},{"te":58500,"fa":210000,"type":"huo","wu":175000},{"te":51000,"fa":155000,"type":"tu","wu":250000},{"te":51500,"fa":255000,"type":"du","wu":160000},{"te":54000,"fa":230000,"type":"lei","wu":230000}],"name":""},"16":{"data":[{"te":0,"fa":2500,"type":"wu","wu":2500}],"name":"21修士伏击"},"17":{"data":[{"te":500,"fa":3800,"type":"huo","wu":3300}],"name":"24宗门大战"},"18":{"data":[{"te":500,"fa":4500,"type":"tu","wu":4000}],"name":"28试炼谷实战"},"19":{"data":[{"te":800,"fa":0,"type":"shui","wu":6500}],"name":"35为民除妖"},"20":{"data":[{"te":0,"fa":11000,"type":"wu","wu":9000}],"name":"41散修土匪"},"21":{"data":[{"te":2000,"fa":0,"type":"du","wu":12000}],"name":"45三打白骨精1"},"22":{"data":[{"te":2500,"fa":13000,"type":"jin","wu":0}],"name":"46三打白骨精2"},"23":{"data":[{"te":0,"fa":14000,"type":"wu","wu":13000}],"name":"48英雄救美"},"24":{"data":[{"te":2400,"fa":14000,"type":"huo","wu":0}],"name":"51自由天赋"},"25":{"data":[{"te":2400,"fa":0,"type":"lei","wu":14000}],"name":"51统治天赋"},"26":{"data":[{"te":1500,"fa":15000,"type":"du","wu":14000}],"name":"53进药仙谷"},"27":{"data":[{"te":2500,"fa":16000,"type":"mu","wu":0}],"name":"55魔教袭击"},"28":{"data":[{"te":2000,"fa":0,"type":"shui","wu":18000}],"name":"57突破邪修"},"29":{"data":[{"te":2700,"fa":20000,"type":"mu","wu":18000}],"name":"70采灵草"},"30":{"data":[{"te":3000,"fa":0,"type":"du","wu":21000}],"name":"71沙漠毒蝎"},"31":{"data":[{"te":3000,"fa":21000,"type":"shui","wu":0}],"name":"71雪山雪狼"},"32":{"data":[{"te":3200,"fa":19000,"type":"tu","wu":20000}],"name":"75占领仓库"},"33":{"data":[{"te":7500,"fa":35000,"type":"huo","wu":43000}],"name":"76水月镜(困难)"},"34":{"data":[{"te":3500,"fa":21000,"type":"shui","wu":21000}],"name":"79千年玄龟"},"35":{"data":[{"te":4000,"fa":22000,"type":"huo","wu":22000}],"name":"80魔教总攻"},"36":{"data":[{"te":5400,"fa":28000,"type":"jin","wu":29000}],"name":"85地牢救人"},"37":{"data":[{"te":5700,"fa":27000,"type":"lei","wu":27000}],"name":"87和秀秀合作"},"38":{"data":[{"te":5700,"fa":28000,"type":"du","wu":26000}],"name":"87和黑衣人合作"},"39":{"data":[{"te":5700,"fa":30000,"type":"mu","wu":30000}],"name":"89打三头龙"},"40":{"data":[{"te":16000,"fa":56000,"type":"lei","wu":68000}],"name":"89水月镜(困难)"},"41":{"data":[{"te":7500,"fa":34000,"type":"du","wu":32000}],"name":"98枯木老祖"},"42":{"data":[{"te":17000,"fa":71000,"type":"lei","wu":55000}],"name":"99灵璇儿(困难)长老"},"43":{"data":[{"te":0,"fa":0,"type":"wu","wu":40000}],"name":"105青头鸟"},"44":{"data":[{"te":8000,"fa":33000,"type":"shui","wu":35000}],"name":"108灵阳少女"},"45":{"data":[{"te":9200,"fa":42000,"type":"tu","wu":0}],"name":"111星河领主"},"46":{"data":[{"te":11500,"fa":39000,"type":"shui","wu":39000}],"name":"114突袭雪猿"},"47":{"data":[{"te":12500,"fa":41000,"type":"lei","wu":41000}],"name":"118娜迦海妖"},"48":{"data":[{"te":20000,"fa":84000,"type":"huo","wu":74000}],"name":"122灵璇儿(困难)人鸟族"},"49":{"data":[{"te":12000,"fa":41000,"type":"mu","wu":44000}],"name":"122战人鸟族"},"50":{"data":[{"te":16000,"fa":51000,"type":"shui","wu":50000}],"name":"130娜迦海妖"},"51":{"data":[{"te":23000,"fa":129000,"type":"du","wu":0}],"name":"137灵璇儿(困难)人鸟族"},"52":{"data":[{"te":17000,"fa":65000,"type":"du","wu":0}],"name":"137人鸟堵截"},"53":{"data":[{"te":18600,"fa":67000,"type":"huo","wu":63000}],"name":"141双头人鸟"},"54":{"data":[{"te":0,"fa":310000,"type":"wu","wu":0}],"name":"142老王(蓝色)"},"55":{"data":[{"te":0,"fa":0,"type":"wu","wu":310000}],"name":"142老王(黄色)"},"56":{"data":[{"te":19000,"fa":69000,"type":"jin","wu":71000}],"name":"143利爪长老"},"57":{"data":[{"te":22000,"fa":73000,"type":"mu","wu":73000}],"name":"146首领夫妇"},"58":{"data":[{"te":0,"fa":185000,"type":"wu","wu":185000}],"name":"151混元帝君(困难)"},"59":{"data":[{"te":29000,"fa":108000,"type":"lei","wu":0}],"name":"152道殿搜寻"},"60":{"data":[{"te":40000,"fa":135000,"type":"mu","wu":135000}],"name":"155暖暖(困难)"},"61":{"data":[{"te":31000,"fa":0,"type":"du","wu":122000}],"name":"157双头鸭群"},"62":{"data":[{"te":34000,"fa":94000,"type":"shui","wu":93000}],"name":"161剑修灵剑"},"63":{"data":[{"te":48000,"fa":70000,"type":"huo","wu":110000}],"name":"164选择红色"},"64":{"data":[{"te":48000,"fa":110000,"type":"mu","wu":70000}],"name":"164选择绿色"},"65":{"data":[{"te":48000,"fa":90000,"type":"tu","wu":90000}],"name":"164选择黄色"},"66":{"data":[{"te":35000,"fa":111000,"type":"shui","wu":111000}],"name":"167暖暖(困难)五个剑修"},"67":{"data":[{"te":45000,"fa":235000,"type":"du","wu":0}],"name":"167暖暖(困难)医修"},"68":{"data":[{"te":45000,"fa":180000,"type":"jin","wu":180000}],"name":"167暖暖(困难)绝修"},"69":{"data":[{"te":35000,"fa":111000,"type":"shui","wu":111000}],"name":"167五个剑修"},"70":{"data":[{"te":36000,"fa":150000,"type":"du","wu":0}],"name":"167医修"},"71":{"data":[{"te":37000,"fa":120000,"type":"jin","wu":120000}],"name":"167绝修"},"72":{"data":[{"te":0,"fa":0,"type":"wu","wu":430000}],"name":"171守陵人小弟"},"73":{"data":[{"te":80000,"fa":330000,"type":"lei","wu":205000}],"name":"171守陵人大哥"},"74":{"data":[{"te":140000,"fa":660000,"type":"lei","wu":460000},{"te":140000,"fa":500000,"type":"mu","wu":680000},{"te":140000,"fa":645000,"type":"shui","wu":645000},{"te":160000,"fa":690000,"type":"du","wu":690000}],"name":"171守陵人(极难)"},"75":{"data":[{"te":38000,"fa":130000,"type":"mu","wu":130000}],"name":"172妖兽兽潮"},"76":{"data":[{"te":39000,"fa":160000,"type":"jin","wu":0}],"name":"177灵璇儿"},"77":{"data":[{"te":45000,"fa":220000,"type":"du","wu":220000}],"name":"177暖暖(困难)幻毒阵医修"},"78":{"data":[{"te":45000,"fa":250000,"type":"jin","wu":0}],"name":"177灵璇儿(困难)七重大阵"},"79":{"data":[{"te":40000,"fa":160000,"type":"shui","wu":160000}],"name":"179劫云兽潮"},"80":{"data":[{"te":0,"fa":0,"type":"wu","wu":205000}],"name":"182开阳殿"},"81":{"data":[{"te":43000,"fa":180000,"type":"lei","wu":165000}],"name":"183瑶光殿星光虎"},"82":{"data":[{"te":100000,"fa":315000,"type":"lei","wu":405000}],"name":"183瑶光殿星光虎（困难）"},"83":{"data":[{"te":55000,"fa":375000,"type":"mu","wu":0}],"name":"184邪眼(困难)"},"84":{"data":[{"te":45000,"fa":185000,"type":"mu","wu":165000}],"name":"184乘胜追击邪眼"},"85":{"data":[{"te":51000,"fa":230000,"type":"du","wu":270000}],"name":"186暖暖(困难)落日门剑圣"},"86":{"data":[{"te":55000,"fa":255000,"type":"shui","wu":280000}],"name":"186灵璇儿(困难)落日门剑圣"},"87":{"data":[{"te":46000,"fa":170000,"type":"shui","wu":190000}],"name":"186剑圣金光子"},"88":{"data":[{"te":48000,"fa":205000,"type":"shui","wu":175000}],"name":"190自由天赋童姥"},"89":{"data":[{"te":49000,"fa":180000,"type":"tu","wu":205000}],"name":"190统治天赋雪猿"},"90":{"data":[{"te":60000,"fa":340000,"type":"du","wu":260000}],"name":"194暖暖(困难)食人花"},"91":{"data":[{"te":50000,"fa":240000,"type":"du","wu":0}],"name":"194食人花"},"92":{"data":[{"te":70000,"fa":0,"type":"lei","wu":475000}],"name":"195剑圣二十三(困难)"},"93":{"data":[{"te":115000,"fa":645000,"type":"huo","wu":455000}],"name":"196邪神"},"94":{"data":[{"te":0,"fa":0,"type":"wu","wu":275000}],"name":"197三角形"},"95":{"data":[{"te":0,"fa":275000,"type":"wu","wu":0}],"name":"197圆形"},"96":{"data":[{"te":70000,"fa":175000,"type":"huo","wu":195000}],"name":"197正方形"},"97":{"data":[{"te":0,"fa":0,"type":"wu","wu":455000}],"name":"197暖暖(困难)正方形"},"98":{"data":[{"te":0,"fa":455000,"type":"wu","wu":0}],"name":"197暖暖(困难)圆形"},"99":{"data":[{"te":120000,"fa":335000,"type":"huo","wu":335000}],"name":"197暖暖(困难)正方形"},"100":{"data":[{"te":53000,"fa":255000,"type":"huo","wu":0}],"name":"197菩提老祖"},"101":{"data":[{"te":100000,"fa":460000,"type":"huo","wu":0}],"name":"197菩提老祖 暖暖(困难)"},"102":{"data":[{"te":0,"fa":620000,"type":"wu","wu":620000}],"name":"198如来神掌"},"103":{"data":[{"te":200000,"fa":0,"type":"huo","wu":605000},{"te":200000,"fa":605000,"type":"shui","wu":0},{"te":200000,"fa":580000,"type":"tu","wu":555000}],"name":"199剑意"},"104":{"data":[{"te":110000,"fa":540000,"type":"tu","wu":540000}],"name":"200丹王小弟"},"105":{"data":[{"te":120000,"fa":460000,"type":"jin","wu":660000}],"name":"200丹王"},"106":{"data":[{"te":10000,"fa":400000,"type":"lei","wu":360000}],"name":"201带电九头龙(璇儿)(困难)"},"107":{"data":[{"te":85000,"fa":385000,"type":"mu","wu":425000}],"name":"201万剑台剑侍(璇儿)(困难)"},"108":{"data":[{"te":85000,"fa":430000,"type":"shui","wu":430000}],"name":"201剑圣金光子(璇儿)(困难)"},"109":{"data":[{"te":100000,"fa":410000,"type":"du","wu":480000}],"name":"201魔化金光子(璇儿)(困难)"},"110":{"data":[{"te":10000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(璇儿)"},"111":{"data":[{"te":60000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(璇儿)"},"112":{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(璇儿)"},"113":{"data":[{"te":70000,"fa":280000,"type":"du","wu":330000}],"name":"201魔化金光子(璇儿)"},"114":{"data":[{"te":85000,"fa":400000,"type":"lei","wu":360000}],"name":"201带电九头龙(暖暖)(困难)"},"115":{"data":[{"te":10000,"fa":385000,"type":"mu","wu":425000}],"name":"201万剑台剑侍(暖暖)(困难)"},"116":{"data":[{"te":85000,"fa":430000,"type":"shui","wu":430000}],"name":"201剑圣金光子(暖暖)(困难)"},"117":{"data":[{"te":10000,"fa":460000,"type":"du","wu":460000}],"name":"201魔化金光子(暖暖)(困难)"},"118":{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(暖暖)"},"119":{"data":[{"te":10000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(暖暖)"},"120":{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(暖暖)"},"121":{"data":[{"te":10000,"fa":320000,"type":"du","wu":320000}],"name":"201魔化金光子(暖暖)"},"122":{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(童姥)"},"123":{"data":[{"te":70000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(童姥)"},"124":{"data":[{"te":10000,"fa":335000,"type":"shui","wu":335000}],"name":"201剑圣金光子(童姥)"},"125":{"data":[{"te":70000,"fa":330000,"type":"du","wu":280000}],"name":"201魔化金光子(童姥)"},"126":{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(独自一人)"},"127":{"data":[{"te":70000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(独自一人)"},"128":{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(独自一人)"},"129":{"data":[{"te":70000,"fa":335000,"type":"du","wu":335000}],"name":"201魔化金光子(独自一人)"},"130":{"data":[{"te":140000,"fa":660000,"type":"lei","wu":460000}],"name":"201极难1"},"131":{"data":[{"te":140000,"fa":500000,"type":"mu","wu":680000}],"name":"201极难2"},"132":{"data":[{"te":140000,"fa":645000,"type":"shui","wu":645000}],"name":"201极难3"},"133":{"data":[{"te":160000,"fa":690000,"type":"du","wu":690000}],"name":"204极难4"}},
            typeEnum: {
                wu: '无',
                jin: '金',
                mu: '木',
                shui: '水',
                huo: '火',
                tu: '土',
                lei: '雷',
                du: '毒'
            },
            log: {
                '2022-08-20': '新增渡劫计算器',
                '2022-08-21': '优化了ui展示</br>调整了部分数据排序</br>增加了输入框数据的本地缓存',
                '2022-08-22': '更新了142,171,199层数据</br>格式化了数字，不会出现小数了</br>输入框聚焦时自动清除数字</br>增加了编辑本地数据的功能,后续将更新添加数据以及导入导出',
            },
            clientWidth: 0,
            clientHeight: 0,
            scrollHeight: 0,
        }
    },
    created() {
        this.clientWidth = document.documentElement.clientWidth;
        this.clientHeight = document.documentElement.clientHeight;
        for(let data in this.bossData){
            for(let item in this.bossData[data]['data']){
                if(!this.bossData[data]['data'][item].temp){
                    this.bossData[data]['data'][item].temp={};
                }
            }
        }
    },
    mounted() {
        this.scrollHeight = this.clientHeight - document.getElementById("nav").offsetHeight -
            document.getElementById("top").offsetHeight - 10;
        let proStr = localStorage.getItem("pro");
        if (proStr) {
            this.pro = JSON.parse(proStr);
        }
    },
    watch: {
        pro:{
            handler(newValue, oldValue) {
                localStorage.setItem("pro", JSON.stringify(newValue));
            },
            deep: true
        }
    },
    methods: {
        clearNum(value,event){
            this.pro[value]=0;
            event.target.value='';
        },
        computedWushang(key) {
            let temp = key.wu - this.pro.xiuWei * 45 - this.pro.wuKang * 125;
            temp = parseInt((temp * 100 - temp * this.pro.wuJian) / 100);
            key.temp.chengWuShang = temp < 0 ? 0 : temp;
            return key.temp.chengWuShang;
        },
        computedFaShang(key) {
            let temp = key.fa - this.pro.xiuWei * 45 - this.pro.faKang * 125;
            temp = parseInt((temp * 100 - temp * this.pro.faJian) / 100);
            key.temp.chengFaShang = temp < 0 ? 0 : temp;
            return key.temp.chengFaShang;
        },
        computedTeShang(key) {
            key.temp.chengTeShang =parseInt((key.te * 100 - key.te * this.pro[key.type]) / 100);
            key.temp.chengTeShang = key.temp.chengTeShang < 0 ? 0 : key.temp.chengTeShang;
            return key.temp.chengTeShang;
        },
        computedZuiShang(key) {
            let temp = key.temp.chengWuShang + key.temp.chengFaShang + key.temp.chengTeShang;
            key.temp.chengZuiShang = parseInt((temp * 100 - temp * this.pro.zuiZhong) / 100);
            return key.temp.chengZuiShang;
        },
        computedTongGuo(key) {
            return this.pro.tiZhi * 50 - key.temp.chengZuiShang <= 0 ? '失败' : '成功';
        },
        isSuccess(key) {
            return this.pro.tiZhi * 50 - key.temp.chengZuiShang <= 0 ? 'fail' : 'success';
        }
    },
}).mount('#app')