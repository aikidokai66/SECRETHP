class Node{
    constructor(name, src = ''){
        this.state = 0;    //0:待機 1:アクティブ
        this.name = name;
        this.nodelist = [];
        this.src = src;
    }
}

//ノードの作製
const root0 = new Node('取り方');
const root1 = new Node('技');
//---取り方---
const node_0_0 = new Node('逆半身片手取り');
const node_0_1 = new Node('相半身片手取り');
const node_0_2 = new Node('両手取り');
const node_0_3 = new Node('後ろ両手取り');
const node_0_4 = new Node('諸手取り');
const node_0_5 = new Node('正面打ち');
const node_0_6 = new Node('横面打ち');
const node_0_7 = new Node('肩取り');
const node_0_8 = new Node('両肩取り');
const node_0_9 = new Node('後ろ両肩取り');
//---技---
const node_1_0 = new Node('四方投げ');
const node_1_1 = new Node('小手返し');
const node_1_2 = new Node('入り身投げ');
const node_1_3 = new Node('腕絡み');
const node_1_4 = new Node('天秤投げ');
const node_1_5 = new Node('回転投げ');
const node_1_6 = new Node('天地投げ');
const node_1_7 = new Node('呼吸');

const node_0_0_0 = new Node('四方投げ');
const node_0_0_1 = new Node('小手返し');
const node_0_0_2 = new Node('入り身投げ');
const node_0_0_3 = new Node('腕絡み');
const node_0_0_4 = new Node('天秤投げ');
const node_0_0_5 = new Node('回転投げ');
const node_0_0_6 = new Node('天秤投げ');
const node_0_0_7 = new Node('呼吸');

const node_0_1_0 = new Node('四方投げ');
const node_0_1_1 = new Node('小手返し');
const node_0_1_2 = new Node('入り身投げ');
const node_0_1_3 = new Node('腕絡み');
const node_0_1_4 = new Node('天秤投げ');
const node_0_1_5 = new Node('回転投げ');
const node_0_1_6 = new Node('天秤投げ');
const node_0_1_7 = new Node('呼吸');

const node_0_2_0 = new Node('四方投げ');
const node_0_2_1 = new Node('小手返し');
const node_0_2_2 = new Node('入り身投げ');
const node_0_2_3 = new Node('腕絡み');
const node_0_2_4 = new Node('天秤投げ');
const node_0_2_5 = new Node('回転投げ');
const node_0_2_6 = new Node('天秤投げ');
const node_0_2_7 = new Node('呼吸');

const node_0_3_0 = new Node('四方投げ');
const node_0_3_1 = new Node('小手返し');
const node_0_3_2 = new Node('入り身投げ');
const node_0_3_3 = new Node('腕絡み');
const node_0_3_4 = new Node('天秤投げ');
const node_0_3_5 = new Node('回転投げ');
const node_0_3_6 = new Node('天秤投げ');
const node_0_3_7 = new Node('呼吸');

const node_0_4_0 = new Node('四方投げ');
const node_0_4_1 = new Node('小手返し');
const node_0_4_2 = new Node('入り身投げ');
const node_0_4_3 = new Node('腕絡み');
const node_0_4_4 = new Node('天秤投げ');
const node_0_4_5 = new Node('回転投げ');
const node_0_4_6 = new Node('天秤投げ');
const node_0_4_7 = new Node('呼吸');

const node_0_5_0 = new Node('四方投げ');
const node_0_5_1 = new Node('小手返し');
const node_0_5_2 = new Node('入り身投げ');
const node_0_5_3 = new Node('腕絡み');
const node_0_5_4 = new Node('天秤投げ');
const node_0_5_5 = new Node('回転投げ');
const node_0_5_6 = new Node('天秤投げ');
const node_0_5_7 = new Node('呼吸');

const node_0_6_0 = new Node('四方投げ');
const node_0_6_1 = new Node('小手返し');
const node_0_6_2 = new Node('入り身投げ');
const node_0_6_3 = new Node('腕絡み');
const node_0_6_4 = new Node('天秤投げ');
const node_0_6_5 = new Node('回転投げ');
const node_0_6_6 = new Node('天秤投げ');
const node_0_6_7 = new Node('呼吸');

const node_0_7_0 = new Node('四方投げ');
const node_0_7_1 = new Node('小手返し');
const node_0_7_2 = new Node('入り身投げ');
const node_0_7_3 = new Node('腕絡み');
const node_0_7_4 = new Node('天秤投げ');
const node_0_7_5 = new Node('回転投げ');
const node_0_7_6 = new Node('天秤投げ');
const node_0_7_7 = new Node('呼吸');

const node_0_8_0 = new Node('四方投げ');
const node_0_8_1 = new Node('小手返し');
const node_0_8_2 = new Node('入り身投げ');
const node_0_8_3 = new Node('腕絡み');
const node_0_8_4 = new Node('天秤投げ');
const node_0_8_5 = new Node('回転投げ');
const node_0_8_6 = new Node('天秤投げ');
const node_0_8_7 = new Node('呼吸');

const node_0_9_0 = new Node('四方投げ');
const node_0_9_1 = new Node('小手返し');
const node_0_9_2 = new Node('入り身投げ');
const node_0_9_3 = new Node('腕絡み');
const node_0_9_4 = new Node('天秤投げ');
const node_0_9_5 = new Node('回転投げ');
const node_0_9_6 = new Node('天秤投げ');
const node_0_9_7 = new Node('呼吸');

//動画ノード
const node_0_0_0_0 = new Node('','https://www.youtube.com/embed/PdceHMR3w14?si=MFa0LhqRQBy99o_E');
const node_0_0_2_0 = new Node('',"https://www.youtube.com/embed/ZCwWKN-0GMg?si=Ei3o56qyoUEcaTwD");
//子ノードの設定
root0.nodelist.push(node_0_0,node_0_1,node_0_2,node_0_3,node_0_4,node_0_5,node_0_6,node_0_7,node_0_8,node_0_9);
root1.nodelist.push(node_1_0,node_1_1,node_1_2,node_1_3,node_1_4,node_1_5,node_1_6,node_1_7);
node_0_0.nodelist.push(node_0_0_0,node_0_0_1,node_0_0_2,node_0_0_3,node_0_0_4,node_0_0_5,node_0_0_6,node_0_0_7);
node_0_1.nodelist.push(node_0_1_0,node_0_1_1,node_0_1_2,node_0_1_3,node_0_1_4,node_0_1_5,node_0_1_6,node_0_1_7);
node_0_2.nodelist.push(node_0_2_0,node_0_2_1,node_0_2_2,node_0_2_3,node_0_2_4,node_0_2_5,node_0_2_6,node_0_2_7);
node_0_3.nodelist.push(node_0_3_0,node_0_3_1,node_0_3_2,node_0_3_3,node_0_3_4,node_0_3_5,node_0_3_6,node_0_3_7);
node_0_4.nodelist.push(node_0_4_0,node_0_4_1,node_0_4_2,node_0_4_3,node_0_4_4,node_0_4_5,node_0_4_6,node_0_4_7);
node_0_5.nodelist.push(node_0_5_0,node_0_5_1,node_0_5_2,node_0_5_3,node_0_5_4,node_0_5_5,node_0_5_6,node_0_5_7);
node_0_6.nodelist.push(node_0_6_0,node_0_6_1,node_0_6_2,node_0_6_3,node_0_6_4,node_0_6_5,node_0_6_6,node_0_6_7);
node_0_7.nodelist.push(node_0_7_0,node_0_7_1,node_0_7_2,node_0_7_3,node_0_7_4,node_0_7_5,node_0_7_6,node_0_7_7);
node_0_8.nodelist.push(node_0_8_0,node_0_8_1,node_0_8_2,node_0_8_3,node_0_8_4,node_0_8_5,node_0_8_6,node_0_8_7);
node_0_9.nodelist.push(node_0_9_0,node_0_9_1,node_0_9_2,node_0_9_3,node_0_9_4,node_0_9_5,node_0_9_6,node_0_9_7);
node_0_0_0.nodelist.push(node_0_0_0_0);
node_0_0_2.nodelist.push(node_0_0_2_0);


//初期化
let roots = [root0,root1];
let activeLayer = 0;
const maxLayerNum = 3;

//htmlから用いる(引数にはnodeのidの可変長配列)
function  nodeAction(...nodeIds){
    const targetNode = getNode(nodeIds);
    updateNode(targetNode,nodeIds.length-1);
    createNode(targetNode,nodeIds);
    changeColor(nodeIds);

}

//nodeId(配列)からnodeを取得する
function getNode(nodeId){

    let children = roots;
    let resultNode = null;
    for(let i = 0; i < nodeId.length; i++){
        resultNode = children[nodeId[i]];
        children = resultNode.nodelist;
    }

    return resultNode;
}

//nodeのstateを参照してホームページにnodeを作製
function createNode(targetNode,nodeIds){
    //activeLayer以下のLayerの要素を消す
    for(let index = activeLayer; index <= maxLayerNum; index++ ){
        const parent = document.getElementById('h'+String(index));
        try{
            while(parent.firstChild){
                parent.removeChild(parent.firstChild);
            }
        } catch(e){

        }

    }
    //作製するノードのidの下準備
    let id = arrayToString(nodeIds);
    let childId = 0;
    //ノードの作製
    const layer = document.getElementById('h'+String(activeLayer));
    targetNode.nodelist.forEach((child) => {
        //動画プレイヤーの設定
        const player = document.getElementById("player");
        player.setAttribute("src",child.src);
        if(child.src != '') {
            return;
        }
        //ノードの作製
        const node = document.createElement('div');
        initNode(node,id + ',' + String(childId));
        node.innerHTML = child.name;
        layer.appendChild(node);

        childId++;
    });
}

//活性化されるnodeを取得して木全体のnodeのstateを更新
function updateNode(targetNode,targetLayer){
    //activeLayerとtargetNodeのLayerが同じである場合
    if(activeLayer == targetLayer){
        targetNode.state = 1;
        activeLayer = targetLayer + 1;
    }
    else if(activeLayer > targetLayer){
        let activeNode;
        let nodes = roots;
        let layerNum = 0;
        let roopFlag = true;
        while(roopFlag){
            roopFlag = false;
            nodes.forEach((child)=>{
                if(child.state == 1){
                    activeNode = child;
                    roopFlag = true;
                }
            });
            nodes = activeNode.nodelist;

            if(layerNum == targetLayer){
                activeNode.state = 0;
            }
            layerNum++;
        }
        targetNode.state = 1;
        activeLayer = targetLayer + 1;
    }

}

function initNode(node,nodeId){
    node.setAttribute('class','node');
    node.id='id' + nodeId;
    node.setAttribute('onclick','nodeAction(' + nodeId + ')');
}


function initPlayer(player,src){
    player.width=560;
    player.height=315;
    player.src=src;
    player.title = 'youtube video player';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.referrerpolicy="strict-origin-when-cross-origin";
    player.frameBorder='0';
    player.allowfullscreen=true;

}

function changeColor(nodeIds){
    //選択したノードのレイヤーの色を初期化
    const parent = document.getElementById('h'+String(activeLayer-1));
    Array.from(parent.children).forEach((node) => {
        node.style.opacity = 0.4;
    });
    //選択したノードの色を濃くする
    let id = arrayToString(nodeIds);
    const nextNode = document.getElementById('id'+id);
   nextNode.style.opacity = 1.0;

}

function arrayToString(array){
    let str = '';
    for(let i = 0; i < array.length;i++){
        if(i == 0) str = String(array[i]);
        else str = str + ',' + String(array[i]);
    }
    return str;
}

