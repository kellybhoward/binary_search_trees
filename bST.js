//Binary Search Trees
//I'll be adding to this file as I learn more algorithms using BSTs this week at Coding Dojo

//Binary Search Tree Node
//Just like a linked list node except instead of being linear, it branches off left and right by < / >

function btNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

//Binary Search Tree creation
//Just like a linked list but instead of a head, it has a root pointing that will eventually point to a starting node

function bst(){
  this.root = null;
  
  //make an isEmpty function to use throughout the other methods
  this.isEmpty = function(){
    if(this.root){
      return false;
    } else{
      return true;
    }
  }
  
  //make an add function to add new UNIQUE nodes to the bst
  this.add = function(val){
    nNode = new btNode(val);
    
    //check if the bst is empty, if it is, then set the root to the new node
    if(this.isEmpty()){
      this.root = nNode;
      return true;
    }
    
    //set a runner variable to the root of the bst
    var r = this.root; 
    while(r){
      if(nNode.val < r.val && r.left == null){
        r.left = nNode;
        return true;
      }
      else if(nNode.val > r.val && r.right == null){
        r.right = nNode;
        return true;
      }
      else if(nNode.val == r.val){
        return "Already have that value";
      }
      else if(nNode.val < r.val){
        r = r.left;
      }
      else{
        r = r.right;
      }
    }
    return false;
  }
  
  //check the bst to see if it contains the given value
  this.contains = function(val){
    var r = this.root;
    while(r){
      if(val == r.val){
        return true;
      }
      else if(val < r.val){
        r = r.left;
      }
      else{
        r = r.right;
      }
    }
    return false;
  }
}
