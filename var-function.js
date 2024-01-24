function examapleFunction()
{
    if (true)
    {
        var functionScopeVar = "I am function-scoped"
    }
    console.log(functionScopeVar);
}
examapleFunction();
console.log(functionScopeVar);


