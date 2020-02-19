redux is more of an architecture than an a library --> it's **predictable** - state management solution -- helps apps that behave consistently.
-centralized
-flexible
-time travel debugging (?)

1. Single source of truth
   1. the state ->data of your app is stored in an single state obj

2. State is READ ONLY (Immutable)
   1. only way to change state is to emit an action- obj describing what happened

3. changes are made with pure functions


- removes state management from react
Redux Actions
    |  |
    |  |
    \  /
     \/
 A. store sets the state
    |  |
    |  |
    \  /
     \/
B. Event occurs in the UI 
    |  |
    |  |
    \  /
     \/
C. Action that describes the event is dispatched
    |  |
    |  |
    \  /
     \/
D. Reducer updates the state tree in a predictable way
    |  |
    |  |
    \  /
     \/
E. UI receives the updated state tree