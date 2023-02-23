function getArgs(func) {
    const funcStr = func.toString();
    const paramStart = funcStr.indexOf('(') + 1;
    const paramEnd = funcStr.indexOf(')');
    const paramString = funcStr.substring(paramStart, paramEnd).trim();
    return paramString.split(',').map(param => param.trim());
}

export default getArgs