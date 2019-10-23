# @paysera/js-lib-redux-state-history [![Travis CI](https://api.travis-ci.org/paysera/js-lib-redux-state-history.svg?branch=master)](https://api.travis-ci.org/paysera/js-lib-redux-state-history.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/paysera/js-lib-redux-state-history/badge.svg?branch=master)](https://coveralls.io/github/paysera/js-lib-redux-state-history?branch=master) 

A simple library that provides means to save Redux state and revert it when needed.

## Installation

1. Require the package via package manager: `npm i @paysera/js-lib-redux-state-history`

2. Simply import the `withHistory` higher-order reducer and wrap your reducer with it. You may as well provide configuration
as a second argument.

```js
import { withHistory } from '@paysera/js-lib-redux-state-history';
import { combineReducers } from 'redux';
import fooReducer from './foo';
import barReducer from './bar';
import bazReducer from './baz';

const config = {
    maxHistoryLength: 10,
};

const reducers = {
    foo: withHistory(fooReducer, config),
    bar: withHistory(barReducer),
    baz: bazReducer,
};

export default combineReducers(reducers);
```

## Usage

`redux-history` is a simple collection of redux actions:

- `save()`

Saves current branch into history.

```js
import { save } from '@paysera/js-lib-redux-state-history';
import fooAction from './fooAction';

function fooBar(payload) {
    return (dispatch) => {
        dispatch(save());
        dispatch(fooAction(payload));
    };
}

export default fooBar;
```
___
- `revert()`

Reverts state a step back.

```js
import { save, revert } from '@paysera/js-lib-redux-state-history';
import fooAction from './fooAction';

function fooBar(payload) {
    return (dispatch) => {
        dispatch(save());
        dispatch(fooAction(payload));
        dispatch(revert());
    };
}

export default fooBar;
```
___

- `saveAndLock()`

Saves and locks the history state, so you cannot save or revert it without unlocking.

```js
import { saveAndLock, revert } from '@paysera/js-lib-redux-state-history';
import fooAction from './fooAction';

function fooBar(payload) {
    return (dispatch) => {
        dispatch(saveAndLock());
        dispatch(fooAction(payload));
        
        try {
            dispatch(revert());
        } catch (error) {
            // catch HistoryLockError
        }
    };
}

export default fooBar;
```

___

- `revertAndUnlock()`

Reverts and unlocks the history state.

```js
import { saveAndLock, revertAndUnlock } from '@paysera/js-lib-redux-state-history';
import fooAction from './fooAction';

function fooBar(payload) {
    return (dispatch) => {
        dispatch(saveAndLock());

        dispatch(fooAction(payload));

        dispatch(revertAndUnlock());
        
        dispatch(fooAction(payload));
        
        dispatch(saveAndLock());
    };
}

export default fooBar;
```

___

## Tips

### Dispatching `redux-state-history` actions from reducers

Although it is considered as an anti-pattern, there may be some use-cases where there is no other option as the current
state is not valid anymore. For example, you want to revert your state to the previous saved state due to some error in 
the state (imagine you cannot make changes in seperate branch because you need to give feedback/render instantly to 
your user). 

If you wanted to dispatch inside a reducer, you could do something like this:
```js
import { dispatchAction, revert } from '@paysera/js-lib-redux-state-history';
import store from './store';

export default (state, payload) => {
    dispatchAction(store, revert, payload);
    
    return state;
};
```

Or make a wrapper, that imports store and `dispatchAction` and exports a simple function which you can use later on.

## Considerations

`redux-state-history` is scoped to the reducer it is being wrapped on, meaning you cannot manipulate states from within
different reducers as different reducers have their own separate branches in the Redux state. Although, you may wrap
as many reducers as you like using `withHistory`.

On the other hand, in case you need to access another reducer' state you could consider using only one reducer and do 
some state branching instead.
