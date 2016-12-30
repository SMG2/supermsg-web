/**
 * Created by yangbingxun on 2016/12/8.
 */

const N=10; //权重最大值
const n=7;//random(10)+2; //结点数
const E=n-2; //边最大数

var HashQ=[]; //散列Q队列 索引为结点数值 数值为[]
var S=[];   //S结点
// var Q=[]; //正常Q
var Q=[
    { point:0,value: Infinity, arc: [ { end: 2, w: 8 }, { end: 5, w: 5 }, { end: 6, w: 2 } ] },
    { point:1,value: Infinity, arc: [ { end: 5, w: 7 } ] },
    { point:2,value: Infinity, arc: [ { end: 3, w: 7 }, { end: 4, w: 2 } ] },
    { point:3,value: Infinity, arc: [ { end: 1, w: 5 },{ end: 5, w: 5 }, { end: 6, w: 4 } ] },
    { point:4,value: Infinity, arc: [ { end: 1, w: 5 }] },
    { point:5,value: Infinity, arc: [ { end: 6, w: 7 } ] },
    { point:6,value: Infinity, arc: [ ] }

]

//v(点值，边[{结束点，权}])
function Init(){
    for(var i=0;i<n;i++){
        Q[i]={
            point:i,
            value:Number.POSITIVE_INFINITY,
            arc:[]
        }
    }

    for(let i=0;i<n;i++){
        let e
        while ((e=random(E))==0){}
        let ends=[];
        for(let j=0;j<e;j++){
            ends[random(n)]=random(N)
        }
        ends.forEach((w,end)=>{
            Q[i].arc.push({end:end,w:w})
        })
    }
}

function log(Q){
    Q.forEach((q,index)=>{
        console.log(q)
    })
    console.log("_________________________________________")
}

function random(x){
    var a;
    // while((a=Math.floor(Math.random()*x))==0){}
    a=Math.floor(Math.random()*x);
    return a;
}

function relax(sp,ep,w){
    var value=HashQ[sp][0].value+w;
    if(value<Q[ep].value){
        if(HashQ[Q[ep].value]) HashQ[Q[ep].value]=HashQ[Q[ep].value].slice(1);//截取之后的数组赋值
        Q[ep].value=value;
        if(!HashQ[Q[ep].value]){HashQ[Q[ep].value]=[]}
        HashQ[Q[ep].value].push(Q[ep]);
    }
}

function findIndex(start){
    for(let i=start;i<HashQ.length;i++){
        if(HashQ[i]!=null&&HashQ[i]&&HashQ[i].length!=0){
            return i;
        }
    }
}

function solution(){
    //设结点序数0 为开始结点
    var index=0;
    Q[index].value=0;
    if(!HashQ[Q[index].value]){HashQ[Q[index].value]=[];}
    HashQ[Q[index].value].push(Q[index]);

    while(S.length!=n){
        S.push(HashQ[index][0]);
        // console.log(HashQ[index][0])
        if(HashQ[index][0].arc.length==0){
            HashQ[index]=HashQ[index].slice(1);
            index=findIndex(index);
            continue;
        }
        for(let i=0;i<HashQ[index][0].arc.length;i++){
            relax(index,HashQ[index][0].arc[i].end,HashQ[index][0].arc[i].w)
        }
        HashQ[index]=HashQ[index].slice(1);
        index=findIndex(index);
    }
}

function main(){
    // Init();
    log(Q)
    solution();
    log(Q)
}
main();
