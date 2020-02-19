redux is more of an architecture than an a library --> it's predictable -- helps apps that behave consistently.
-centralized
-flexible
-time travel debugging (?)

1. Single source of truth
   1. the state ->data of your app is stored in an single state obj

2. State is READ ONLY (Immutable)
   1. only way to change state is to emit an action- obj describing what happened

3. changes are made with pure functions