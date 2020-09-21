export {};

type Profile = {
    name:string;
    age:number;
}

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

