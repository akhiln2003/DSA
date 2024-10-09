class Graph{
    constructor(){
        this.adjacentList = {};
    }
    log(){
        console.log(this.adjacentList);
    }
    addVertrix( vertix ){
        this.adjacentList[vertix] = new Array();
    }
    insert( vertix , edjes , isBt ){
        if( vertix == undefined || edjes == undefined )  throw new Error(" invalid vertix or edjes");
        let graph = this.adjacentList;
        if( !graph[vertix])  this.addVertrix( vertix );
        if( !graph[ edjes ]) this.addVertrix(edjes);
        if( graph[vertix].indexOf(edjes) == -1 ) graph[vertix].push(edjes)
        if( isBt )  graph[edjes].push(vertix);
    }
    deletEdge( vertix , edjes ){
        if( vertix == undefined || edjes == undefined ) throw new Error(" invalid vertix or edjes");
        let graph = this.adjacentList;
        this.adjacentList[ vertix ] = this.adjacentList[vertix].filter(( edj )=>edj!=edjes);
        if( this.adjacentList[edjes ]){
            this.adjacentList[edjes] = this.adjacentList[edjes].filter((ver)=> ver != vertix);
        }
    }
    deletVertix( vertix ){
        for( let key in this.adjacentList ){
            let index = this.adjacentList[key].indexOf(vertix);
            if(index == -1) this.adjacentList[key].splice(index , 1)
        }
    delete this.adjacentList[vertix]
    }

    dfs(start){
        const stack = [start];
        const visited = new Set();
        const out = [];

        visited.add(start);

        while( stack.length ){
            let val = stack.pop();
            out.push(val);

            this.adjacentList[val].forEach(element => {
                if( !visited.has(element)){
                    visited.Set(element);
                    stack.push(element)
                }
            });
        }

        return out

    }

    bfs(start){

        const queue = [ start ];
        const visited = new Set();
        const out = [];

        visited.add(start);
        while(queue.length ){
            let val = queue.shift();
            out.push(val);
            this.adjacentList[val].forEach(element => {
                if( !visited.has(element) ){
                    visited.Set(element);
                    queue.push(element)
                }
            })
        }
    }
}
const graph = new Graph();
graph.insert(9,"a",false);
graph.insert("mn",3,true)
graph.log()
graph.deletEdge(9,"a");
graph.log()
graph.deletVertix(3)
graph.log()