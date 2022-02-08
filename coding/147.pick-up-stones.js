function winningStonePicking2(n){
    return n % 3 === 1 ? 'B' : 'A'
  }
  
  
  /** time; o(n)  space: o(n)*/
  function canWinStonePicking(n){
    function whoWins(n, player, oppisition, memo ={}){
      const key = `${n}_${player}_${oppisition}`;
      if(memo[key]) return memo[key]
      if(n === 1) return oppisition
      if(n === 2 || n === 3) return player
      
      
      if(whoWins(n-1, oppisition, player, memo) == player || whoWins(n-2, oppisition, player, memo) == player){
          memo[key] = player
      }else{
          memo[key] = oppisition
      }
      return memo[key]
    }
    return whoWins(n, "A", "B")
  }
  
  
  console.log(canWinStonePicking(1))// 'B'
  
  console.log(canWinStonePicking(2))// 'A'
  
  console.log(canWinStonePicking(3))// 'A'
  
  console.log(canWinStonePicking(4))// 'B'
  
  console.log(canWinStonePicking(6)) // A