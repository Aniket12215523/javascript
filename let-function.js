function examapleFunction()
{
    if (true)
    {
        let functionScopeVar = "I am function-scoped"
    }
    console.log(functionScopeVar);
}
examapleFunction();
console.log(functionScopeVar);