
namespace casting {
    let age: any = 25;
        (age as number).toFixed();
        (age as string).length; 
        (age as string[]).forEach( x => console.log(x)); 

    let name: string = 35 as unknown as string;
}