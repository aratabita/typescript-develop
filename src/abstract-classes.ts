export {};

 // 抽象メソッドは引き継ぎ先でオーバーライドされなければならない。
abstract class Animal{
    abstract cry(): string;
}

class Lion extends Animal{
    cry(){
        return 'roar';
    }
}

class Tiger extends Animal{
    cry(){
        return 'grrrrrrrrrr';
    }
}
