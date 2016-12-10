/**
 * Created by yangbingxun on 2016/12/8.
 */

const N=10; //权重最大值
const n=random(10)+2; //结点数
const e=n-1; //边数

var HashQ=[]; //散列Q队列 索引为结点数值 数值为[]
var S=[];   //S结点
var Q=[]; //正常Q




//v(点值，边（向，权重）)
function Init(){
    var pass;
    for(let i=0;i<n;i++){
        Q[i]={
            value:Number.POSITIVE_INFINITY,
            arc:[]
        }
    }
    for(let i=0;i<e;i++){
        pass=false;
        do{
            var start=random(n);//开始点
            var end=random(n);//结束点
            var v=random(N);//权重

            if(Q[start].arc.length==0){
                Q[start].arc.push({end:end,w:v})
            }else{
                let join=true;
                for(let i=0;i<Q[start].arc.length;i++){
                    if(Q[start].arc[i].end==end){
                        join=false;
                    }
                }
                if(join){
                    Q[start].arc.push({end:end,w:v})
                }
            }
        }while (pass);
    }

}

function random(x){
    var a;
    // while((a=Math.floor(Math.random()*x))==0){}
    a=Math.floor(Math.random()*x);
    return a;
}

function relax(sp,ep,w){
    var value=Q[ep].value+w;
    if(value<Q[sp].value){
        HashQ[Q[sp].value]=HashQ[Q[sp].value].slice(1);
        Q[sp].value=value;
        HashQ[Q[sp].value].push(Q[sp]);
    }
}

function findIndex(){
    for(let i=0;i<HashQ.length;i++){
        if(HashQ[i]!=null||HashQ[i]){
            return i;
        }
    }
}

function solution(){
    //设结点序数0 为开始结点
    var index=0;
    Q[index].value=0;
    if(!HashQ[Q[index].value]){HashQ[Q[index].value]=[]}
    HashQ[Q[index].value].push(Q[index]);
    while(S.length==n){
        S.push(Q[index]);
        if(Q[index].arc.length==0){continue;}
        for(let i=0;i<Q[index].arc.length;i++){
            relax(index,Q[index].arc[i].end,Q[index].arc[i].w)
        }
        index=findIndex();
    }
}

function main(){
    Init();
    solution();
}
main();
