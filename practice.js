var sumNumbers = function(root, val = 0) {
    if(!root) return 0;
    
    val = val * 10;
    val += root.val;
    
    if(!root.right && !root.left){
        return val;
    }
    
    return sumNumbers(root.right, val) + sumNumbers(root.left, val);
    
};