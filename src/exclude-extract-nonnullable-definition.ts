export {};

type DebugType= () => void;
type SomeTypes = string | number| DebugType;
type FunctionType = Exclude<SomeTypes,string|number> // 型を除外する
type NunFunctionType = Exclude<SomeTypes,DebugType>
type TypeExcludingFunction = Exclude<SomeTypes,Function>;

type FunctionTypeByExtract = Extract<SomeTypes,DebugType> //型を抽出する
type NonFunctionTypeByExtract = Extract<SomeTypes,string|number>
type FunctionTypeExtractingFunction = Extract<SomeTypes,DebugType>

type NullableTypes = string | number | null |undefined;
type NonNullableTypes = NonNullable<NullableTypes> //null undefinedを外す