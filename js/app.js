const {createApp} = Vue

createApp({
    data() {
        return {
            version: '1.0.0',
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
            bossData: {
                "1凡人升练气": [{"shangType": "lei", "wuShang": 1300, "teShang": 400, "faShang": 1300}],
                "2练气升筑基": [{"shangType": "lei", "wuShang": 4200, "teShang": 1000, "faShang": 0}, {
                    "shangType": "shui",
                    "wuShang": 0,
                    "teShang": 1100,
                    "faShang": 4300
                }],
                "3筑基升金丹": [{"shangType": "lei", "wuShang": 11000, "teShang": 2000, "faShang": 0}],
                "4筑基升金丹": [{"shangType": "tu", "wuShang": 0, "teShang": 2500, "faShang": 12000}],
                "4金丹升元婴": [{"shangType": "lei", "wuShang": 20200, "teShang": 4800, "faShang": 0}, {
                    "shangType": "mu",
                    "wuShang": 0,
                    "teShang": 5500,
                    "faShang": 22000
                }, {"shangType": "shui", "wuShang": 23000, "teShang": 6000, "faShang": 23000}],
                "5元婴升化神": [{"shangType": "lei", "wuShang": 46000, "teShang": 9500, "faShang": 0}, {
                    "shangType": "jin",
                    "wuShang": 0,
                    "teShang": 10500,
                    "faShang": 47000
                }, {"shangType": "huo", "wuShang": 45000, "teShang": 11000, "faShang": 43000}],
                "6化神升寂灭": [{
                    "shangType": "lei",
                    "wuShang": 67000,
                    "teShang": 22000,
                    "faShang": 67000
                }, {"shangType": "du", "wuShang": 0, "teShang": 23000, "faShang": 75000}, {
                    "shangType": "tu",
                    "wuShang": 69000,
                    "teShang": 25000,
                    "faShang": 69000
                }],
                "7寂灭升大乘": [{"shangType": "tu", "wuShang": 120000, "teShang": 27000, "faShang": 0}, {
                    "shangType": "shui",
                    "wuShang": 105000,
                    "teShang": 30500,
                    "faShang": 105000
                }, {"shangType": "huo", "wuShang": 0, "teShang": 30000, "faShang": 125000}, {
                    "shangType": "lei",
                    "wuShang": 110000,
                    "teShang": 32000,
                    "faShang": 110000
                }],
                "8大乘升飞升": [{
                    "shangType": "jin",
                    "wuShang": 195000,
                    "teShang": 40000,
                    "faShang": 225000
                }, {"shangType": "mu", "wuShang": 210000, "teShang": 49500, "faShang": 185000}, {
                    "shangType": "shui",
                    "wuShang": 220000,
                    "teShang": 50000,
                    "faShang": 180000
                }, {"shangType": "huo", "wuShang": 175000, "teShang": 58500, "faShang": 210000}, {
                    "shangType": "tu",
                    "wuShang": 250000,
                    "teShang": 51000,
                    "faShang": 155000
                }, {"shangType": "du", "wuShang": 160000, "teShang": 51500, "faShang": 255000}, {
                    "shangType": "lei",
                    "wuShang": 230000,
                    "teShang": 54000,
                    "faShang": 230000
                }],
                "21修士伏击": [{"shangType": "wu", "wuShang": 2500, "teShang": 0, "faShang": 2500}],
                "24宗门大战": [{"shangType": "huo", "wuShang": 3300, "teShang": 500, "faShang": 3800}],
                "28试炼谷实战": [{"shangType": "tu", "wuShang": 4000, "teShang": 500, "faShang": 4500}],
                "35为民除妖": [{"shangType": "shui", "wuShang": 6500, "teShang": 800, "faShang": 0}],
                "41散修土匪": [{"shangType": "wu", "wuShang": 9000, "teShang": 0, "faShang": 11000}],
                "45三打白骨精1": [{"shangType": "du", "wuShang": 12000, "teShang": 2000, "faShang": 0}],
                "46三打白骨精2": [{"shangType": "jin", "wuShang": 0, "teShang": 2500, "faShang": 13000}],
                "48英雄救美": [{"shangType": "wu", "wuShang": 13000, "teShang": 0, "faShang": 14000}],
                "51自由天赋": [{"shangType": "huo", "wuShang": 0, "teShang": 2400, "faShang": 14000}],
                "51统治天赋": [{"shangType": "lei", "wuShang": 14000, "teShang": 2400, "faShang": 0}],
                "53进药仙谷": [{"shangType": "du", "wuShang": 14000, "teShang": 1500, "faShang": 15000}],
                "55魔教袭击": [{"shangType": "mu", "wuShang": 0, "teShang": 2500, "faShang": 16000}],
                "57突破邪修": [{"shangType": "shui", "wuShang": 18000, "teShang": 2000, "faShang": 0}],
                "70采灵草": [{"shangType": "mu", "wuShang": 18000, "teShang": 2700, "faShang": 20000}],
                "71沙漠毒蝎": [{"shangType": "du", "wuShang": 21000, "teShang": 3000, "faShang": 0}],
                "71雪山雪狼": [{"shangType": "shui", "wuShang": 0, "teShang": 3000, "faShang": 21000}],
                "75占领仓库": [{"shangType": "tu", "wuShang": 20000, "teShang": 3200, "faShang": 19000}],
                "76水月镜(困难)": [{"shangType": "huo", "wuShang": 43000, "teShang": 7500, "faShang": 35000}],
                "79千年玄龟": [{"shangType": "shui", "wuShang": 21000, "teShang": 3500, "faShang": 21000}],
                "80魔教总攻": [{"shangType": "huo", "wuShang": 22000, "teShang": 4000, "faShang": 22000}],
                "85地牢救人": [{"shangType": "jin", "wuShang": 29000, "teShang": 5400, "faShang": 28000}],
                "87和秀秀合作": [{"shangType": "lei", "wuShang": 27000, "teShang": 5700, "faShang": 27000}],
                "87和黑衣人合作": [{"shangType": "du", "wuShang": 26000, "teShang": 5700, "faShang": 28000}],
                "89打三头龙": [{"shangType": "mu", "wuShang": 30000, "teShang": 5700, "faShang": 30000}],
                "89水月镜(困难)": [{"shangType": "lei", "wuShang": 68000, "teShang": 16000, "faShang": 56000}],
                "98枯木老祖": [{"shangType": "du", "wuShang": 32000, "teShang": 7500, "faShang": 34000}],
                "99灵璇儿(困难)长老": [{"shangType": "lei", "wuShang": 55000, "teShang": 17000, "faShang": 71000}],
                "105青头鸟": [{"shangType": "wu", "wuShang": 40000, "teShang": 0, "faShang": 0}],
                "108灵阳少女": [{"shangType": "shui", "wuShang": 35000, "teShang": 8000, "faShang": 33000}],
                "111星河领主": [{"shangType": "tu", "wuShang": 0, "teShang": 9200, "faShang": 42000}],
                "114突袭雪猿": [{"shangType": "shui", "wuShang": 39000, "teShang": 11500, "faShang": 39000}],
                "118娜迦海妖": [{"shangType": "lei", "wuShang": 41000, "teShang": 12500, "faShang": 41000}],
                "122灵璇儿(困难)人鸟族": [{"shangType": "huo", "wuShang": 74000, "teShang": 20000, "faShang": 84000}],
                "122战人鸟族": [{"shangType": "mu", "wuShang": 44000, "teShang": 12000, "faShang": 41000}],
                "130娜迦海妖": [{"shangType": "shui", "wuShang": 50000, "teShang": 16000, "faShang": 51000}],
                "137灵璇儿(困难)人鸟族": [{"shangType": "du", "wuShang": 0, "teShang": 23000, "faShang": 129000}],
                "137人鸟堵截": [{"shangType": "du", "wuShang": 0, "teShang": 17000, "faShang": 65000}],
                "141双头人鸟": [{"shangType": "huo", "wuShang": 63000, "teShang": 18600, "faShang": 67000}],
                "143利爪长老": [{"shangType": "jin", "wuShang": 71000, "teShang": 19000, "faShang": 69000}],
                "146首领夫妇": [{"shangType": "mu", "wuShang": 73000, "teShang": 22000, "faShang": 73000}],
                "151混元帝君(困难)": [{"shangType": "wu", "wuShang": 185000, "teShang": 0, "faShang": 185000}],
                "152道殿搜寻": [{"shangType": "lei", "wuShang": 0, "teShang": 29000, "faShang": 108000}],
                "155暖暖(困难)": [{"shangType": "mu", "wuShang": 135000, "teShang": 40000, "faShang": 135000}],
                "157双头鸭群": [{"shangType": "du", "wuShang": 122000, "teShang": 31000, "faShang": 0}],
                "161剑修灵剑": [{"shangType": "shui", "wuShang": 93000, "teShang": 34000, "faShang": 94000}],
                "164选择红色": [{"shangType": "huo", "wuShang": 110000, "teShang": 48000, "faShang": 70000}],
                "164选择绿色": [{"shangType": "mu", "wuShang": 70000, "teShang": 48000, "faShang": 110000}],
                "164选择黄色": [{"shangType": "tu", "wuShang": 90000, "teShang": 48000, "faShang": 90000}],
                "167暖暖(困难)五个剑修": [{"shangType": "shui", "wuShang": 111000, "teShang": 35000, "faShang": 111000}],
                "167暖暖(困难)医修": [{"shangType": "du", "wuShang": 0, "teShang": 45000, "faShang": 235000}],
                "167暖暖(困难)绝修": [{"shangType": "jin", "wuShang": 180000, "teShang": 45000, "faShang": 180000}],
                "167五个剑修": [{"shangType": "shui", "wuShang": 111000, "teShang": 35000, "faShang": 111000}],
                "167医修": [{"shangType": "du", "wuShang": 0, "teShang": 36000, "faShang": 150000}],
                "167绝修": [{"shangType": "jin", "wuShang": 120000, "teShang": 37000, "faShang": 120000}],
                "171守陵人小弟": [{"shangType": "wu", "wuShang": 430000, "teShang": 0, "faShang": 0}],
                "171守陵人大哥": [{"shangType": "lei", "wuShang": 205000, "teShang": 80000, "faShang": 330000}],
                "172妖兽兽潮": [{"shangType": "mu", "wuShang": 130000, "teShang": 38000, "faShang": 130000}],
                "177灵璇儿": [{"shangType": "jin", "wuShang": 0, "teShang": 39000, "faShang": 160000}],
                "177暖暖(困难)幻毒阵医修": [{"shangType": "du", "wuShang": 220000, "teShang": 45000, "faShang": 220000}],
                "177灵璇儿(困难)七重大阵": [{"shangType": "jin", "wuShang": 0, "teShang": 45000, "faShang": 250000}],
                "179劫云兽潮": [{"shangType": "shui", "wuShang": 160000, "teShang": 40000, "faShang": 160000}],
                "182开阳殿": [{"shangType": "wu", "wuShang": 205000, "teShang": 0, "faShang": 0}],
                "183瑶光殿星光虎": [{"shangType": "lei", "wuShang": 165000, "teShang": 43000, "faShang": 180000}],
                "183瑶光殿星光虎（困难）": [{"shangType": "lei", "wuShang": 405000, "teShang": 100000, "faShang": 315000}],
                "184邪眼(困难)": [{"shangType": "mu", "wuShang": 0, "teShang": 55000, "faShang": 375000}],
                "184乘胜追击邪眼": [{"shangType": "mu", "wuShang": 165000, "teShang": 45000, "faShang": 185000}],
                "186暖暖(困难)落日门剑圣": [{"shangType": "du", "wuShang": 270000, "teShang": 51000, "faShang": 230000}],
                "186灵璇儿(困难)落日门剑圣": [{"shangType": "shui", "wuShang": 280000, "teShang": 55000, "faShang": 255000}],
                "186剑圣金光子": [{"shangType": "shui", "wuShang": 190000, "teShang": 46000, "faShang": 170000}],
                "190自由天赋童姥": [{"shangType": "shui", "wuShang": 175000, "teShang": 48000, "faShang": 205000}],
                "190统治天赋雪猿": [{"shangType": "tu", "wuShang": 205000, "teShang": 49000, "faShang": 180000}],
                "194暖暖(困难)食人花": [{"shangType": "du", "wuShang": 260000, "teShang": 60000, "faShang": 340000}],
                "194食人花": [{"shangType": "du", "wuShang": 0, "teShang": 50000, "faShang": 240000}],
                "195剑圣二十三(困难)": [{"shangType": "lei", "wuShang": 475000, "teShang": 70000, "faShang": 0}],
                "196邪神": [{"shangType": "huo", "wuShang": 455000, "teShang": 115000, "faShang": 645000}],
                "197三角形": [{"shangType": "wu", "wuShang": 275000, "teShang": 0, "faShang": 0}],
                "197圆形": [{"shangType": "wu", "wuShang": 0, "teShang": 0, "faShang": 275000}],
                "197正方形": [{"shangType": "huo", "wuShang": 195000, "teShang": 70000, "faShang": 175000}],
                "197暖暖(困难)正方形": [{
                    "shangType": "wu",
                    "wuShang": 455000,
                    "teShang": 0,
                    "faShang": 0
                }, {"shangType": "huo", "wuShang": 335000, "teShang": 120000, "faShang": 335000}],
                "197暖暖(困难)圆形": [{"shangType": "wu", "wuShang": 0, "teShang": 0, "faShang": 455000}],
                "197菩提老祖": [{"shangType": "huo", "wuShang": 0, "teShang": 53000, "faShang": 255000}],
                "197菩提老祖 暖暖(困难)": [{"shangType": "huo", "wuShang": 0, "teShang": 100000, "faShang": 460000}],
                "198如来神掌": [{"shangType": "wu", "wuShang": 620000, "teShang": 0, "faShang": 620000}],
                "200丹王小弟": [{"shangType": "tu", "wuShang": 540000, "teShang": 110000, "faShang": 540000}],
                "200丹王": [{"shangType": "jin", "wuShang": 660000, "teShang": 120000, "faShang": 460000}],
                "201带电九头龙(璇儿)(困难)": [{"shangType": "lei", "wuShang": 360000, "teShang": 10000, "faShang": 400000}],
                "201万剑台剑侍(璇儿)(困难)": [{"shangType": "mu", "wuShang": 425000, "teShang": 85000, "faShang": 385000}],
                "201剑圣金光子(璇儿) (困难)": [{"shangType": "shui", "wuShang": 430000, "teShang": 85000, "faShang": 430000}],
                "201魔化金光子(璇儿)(困难)": [{"shangType": "du", "wuShang": 480000, "teShang": 100000, "faShang": 410000}],
                "201带电九头龙(璇儿)": [{"shangType": "lei", "wuShang": 270000, "teShang": 10000, "faShang": 300000}],
                "201万剑台剑侍(璇儿)": [{"shangType": "mu", "wuShang": 300000, "teShang": 60000, "faShang": 280000}],
                "201剑圣金光子(璇儿)": [{"shangType": "shui", "wuShang": 295000, "teShang": 60000, "faShang": 295000}],
                "201魔化金光子(璇儿)": [{"shangType": "du", "wuShang": 330000, "teShang": 70000, "faShang": 280000}],
                "201带电九头龙(暖暖)(困难)": [{"shangType": "lei", "wuShang": 360000, "teShang": 85000, "faShang": 400000}],
                "201万剑台剑侍(暖暖)(困难)": [{"shangType": "mu", "wuShang": 425000, "teShang": 10000, "faShang": 385000}],
                "201剑圣金光子(暖暖)(困难)": [{"shangType": "shui", "wuShang": 430000, "teShang": 85000, "faShang": 430000}],
                "201魔化金光子(暖暖)(困难)": [{"shangType": "du", "wuShang": 460000, "teShang": 10000, "faShang": 460000}],
                "201带电九头龙(暖暖)": [{"shangType": "lei", "wuShang": 270000, "teShang": 60000, "faShang": 300000}],
                "201万剑台剑侍(暖暖)": [{"shangType": "mu", "wuShang": 300000, "teShang": 10000, "faShang": 280000}],
                "201剑圣金光子(暖暖) ": [{"shangType": "shui", "wuShang": 295000, "teShang": 60000, "faShang": 295000}],
                "201魔化金光子(暖暖)": [{"shangType": "du", "wuShang": 320000, "teShang": 10000, "faShang": 320000}],
                "201带电九头龙(童姥)": [{"shangType": "lei", "wuShang": 270000, "teShang": 60000, "faShang": 300000}],
                "201万剑台剑侍(童姥)": [{"shangType": "mu", "wuShang": 300000, "teShang": 70000, "faShang": 280000}],
                "201剑圣金光子(童姥)": [{"shangType": "shui", "wuShang": 335000, "teShang": 10000, "faShang": 335000}],
                "201魔化金光子(童姥)": [{"shangType": "du", "wuShang": 280000, "teShang": 70000, "faShang": 330000}],
                "201带电九头龙(独自一人) ": [{"shangType": "lei", "wuShang": 270000, "teShang": 60000, "faShang": 300000}],
                "201万剑台剑侍(独自一人) ": [{"shangType": "mu", "wuShang": 300000, "teShang": 70000, "faShang": 280000}],
                "201剑圣金光子(独自一人) ": [{"shangType": "shui", "wuShang": 295000, "teShang": 60000, "faShang": 295000}],
                "201魔化金光子(独自一人)": [{"shangType": "du", "wuShang": 335000, "teShang": 70000, "faShang": 335000}],
                "201极难1": [{"shangType": "lei", "wuShang": 460000, "teShang": 140000, "faShang": 660000}],
                "201极难2": [{"shangType": "mu", "wuShang": 680000, "teShang": 140000, "faShang": 500000}],
                "201极难3": [{"shangType": "shui", "wuShang": 645000, "teShang": 140000, "faShang": 645000}],
                "204极难4": [{"shangType": "du", "wuShang": 690000, "teShang": 160000, "faShang": 690000}]
            },
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
            },
            clientWidth: 0,
            clientHeight: 0,
            scrollHeight: 0,
        }
    },
    created() {
        this.clientWidth = document.documentElement.clientWidth;
        this.clientHeight = document.documentElement.clientHeight;
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
        computedWushang(key) {
            let temp = key.wuShang - this.pro.xiuWei * 45 - this.pro.wuKang * 125;
            temp = (temp * 100 - temp * this.pro.wuJian) / 100;
            key.chengWuShang = temp < 0 ? 0 : temp;
            return key.chengWuShang;
        },
        computedFaShang(key) {
            let temp = key.faShang - this.pro.xiuWei * 45 - this.pro.faKang * 125;
            temp = (temp * 100 - temp * this.pro.faJian) / 100;
            key.chengFaShang = temp < 0 ? 0 : temp;
            return key.chengFaShang;
        },
        computedTeShang(key) {
            key.chengTeShang = (key.teShang * 100 - key.teShang * this.pro[key.shangType]) / 100;
            key.chengTeShang = key.chengTeShang < 0 ? 0 : key.chengTeShang;
            return key.chengTeShang;
        },
        computedZuiShang(key) {
            let temp = key.chengWuShang + key.chengFaShang + key.chengTeShang;
            key.chengZuiShang = (temp * 100 - temp * this.pro.zuiZhong) / 100;
            return key.chengZuiShang;
        },
        computedTongGuo(key) {
            return this.pro.tiZhi * 50 - key.chengZuiShang <= 0 ? '失败' : '成功';
        },
        isSuccess(key) {
            return this.pro.tiZhi * 50 - key.chengZuiShang <= 0 ? 'fail' : 'success';
        }
    },
}).mount('#app')