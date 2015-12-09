//Binary Search Trees
//I'll be adding to this file as I learn more algorithms using BSTs this week at Coding Dojo

//Binary Search Tree Node
//Just like a linked list node except instead of being linear, it branches off left and right by < / >
//add an attribute 'parent' for use in future bst methods
function Btnode(val){
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
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
        nNode.parent = r;
        r.left = nNode;
        return this;
      }
      else if(nNode.val > r.val && r.right == null){
        nNode.parent = r;
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
  
  this.remove = function(value){
    //if the bst doesn't contain the value, return the bst and don't remove anything
    if(!this.contains(value)){
      return this;
    }
    var r = this.root;
    while(r){
      //if r is the value we want to remove
       if(r.val == value){
      //if r is the value and r has no connection and we are at the root (avoid pulling val from null)
        if(r.left === null && r.right === null && r.parent == null){
          this.root = null;
          return this;
        }
      //if r is the value and r has no connection and is not parent
        else if(r.left === null && r.right === null){
          if(r.parent.val > r.val){
            r.parent.left = null;
          } else{
              r.parent.right = null;
            }
          return this;
        }
        //if r is the value and r has a right connection
        else if(r.left === null){
          if(r.parent.val > r.val){
            r.parent.left = r.right;
          } else{
              r.parent.right = r.right;
            }
          return this;
        }
      //if r is the value and r has a left connection
        else if(r.right === null){
          if(r.parent.val > r.val){
            r.parent.left = r.left;
          } else{
              r.parent.right = r.left;
            }
          return this;
        }
      //if r is the value and has both a left and right connection, search the left side for the maximum and swap values
        else{
          var max = r.left;
          //find max on the left side of r
          while(max){
            if(max.right){
              var temp = max;
              max = max.right;
              max.parent = temp;
            }
          }
          r.val = max.val;
          if(max.parent.right == max){
            max.parent.right = null;
          }
          return this;
        }
      }
      //r doesn't match so go left if it's too big
      else if(r.val > value){
        r.left.parent = r;
        r = r.left;
      }
      //r doesn't match so go right if it's too small
      else{
        r.right.parent = r;
        r = r.right;
      }
    }
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
var bst2 = new Bst();
console.log(bst2.add(4).add(6).add(10).add(5).add(1).add(2).add(3).remove(2));
