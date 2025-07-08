
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

    // checking that edge is in the graph
    hasEdge(vertex1, vertex2){
        return (
            this.graph[vertex1].has(vertex2) &&
            this.graph[vertex2].has(vertex1)
        )
    }

    // Delete Edge
    removeEdge(vertex1, vertex2){
        this.graph[vertex1].delete(vertex2)
        this.graph[vertex2].delete(vertex1)
    }

    // Delete Vertex
    removeVertex(vertex){
        if(!this.graph[vertex]){
            return 
        }
        for(let adVertex of this.graph[vertex]){
            this.removeEdge(vertex, adVertex)
        }
        delete this.graph[vertex]
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

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")

graph.display()
console.log(graph.hasEdge("A", "B"))

// graph.removeEdge("A", "B")
// graph.display()
