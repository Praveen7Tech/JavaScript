
//Graph
class Graph {
    constructor(){
        this.graph = {}
    }

    // adding  addjecent vertex
    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex] = new Set()
        }
    }

    // adding edge
    addEdge(vertex1, vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }

        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1)
    }

  
    display(){
        for(let vertex in this.graph){
            console.log(vertex+" - > "+[...this.graph[vertex]])
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
