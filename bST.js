//Binary Search Trees
//I'll be adding to this file as I learn more algorithms using BSTs this week at Coding Dojo

//Binary Search Tree Node
//Just like a linked list node except instead of being linear, it branches off left and right by < / >

function Btnode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

//Binary Search Tree creation
//Just like a linked list but instead of a head, it has a root pointing that will eventually point to a starting node

function Bst(){
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
    nNode = new Btnode(val);
    
    //check if the bst is empty, if it is, then set the root to the new node
    if(this.isEmpty()){
      this.root = nNode;
      return this;
    }
    
    //set a runner variable to the root of the bst
    var r = this.root; 
    while(r){
      if(nNode.val < r.val && r.left == null){
        r.left = nNode;
        return this;
      }
      else if(nNode.val > r.val && r.right == null){
        r.right = nNode;
        return this;
      }
      else if(nNode.val == r.val){
        return this;
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
  
  //add get min method
  this.min = function(){
    if(this.isEmpty()){
      return false;
    }
    var r = this.root;
    while(r.left){
      r = r.left;
    }
    return r.val;
  }
  
  //add get max method
  this.max = function(){
    if(this.isEmpty()){
      return false;
    }
    var r = this.root;
    while(r.right){
      r = r.right;
    }
    return r.val;
  }
  
  //add isValid method using recursion
  this.isValid = function(r){
    if(r === undefined){ var r = this.root; }
    if(r === null){ return true; }
    if(( r.left === null || r.left.val < r.val ) &&( r.right === null || r.right.val > r.val )){
      return this.isValid(r.left) && this.isValid(r.right);
    } else {
      return false;
    }
  }
  
  //add size method using recursion
  this.size = function(r){
    if(r === undefined){ var r = this.root; }
    if(r === null){ return 0; }
    return this.size(r.left) + this.size(r.right) + 1;
  }
  
}
//testing methods
bst = new Bst();
console.log(bst.isEmpty());
console.log(bst.add(4).add(6).add(5).add(2).add(3));
console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.isValid());
console.log(bst.contains(5));
