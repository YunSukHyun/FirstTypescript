{
  //Union type
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction){
    console.log(direction);
  }
  move('right');
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login -> success, fail
  type SuccessState = {
    response:{
      body: string;
    }
  }
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState;
  function login(): LoginState{
    return {
      response: {
        body: 'logged in!',
      }
    }
  }

  function printLoginState(state: LoginState){
    if('response' in state){
      console.log(`๐ ${state.response.body}`);
    } else {
      console.log(`๐งจ${state.reason}`)
    }
  }
}