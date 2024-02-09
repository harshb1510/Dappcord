const {expect} = require('chai');

const tokens =(n)=>{
  return ethers.parseUnits(n.toString(),'ether');
}

describe("Dappcord",function(){
  let dappcord;
  beforeEach(async()=>{
    const Dappcord = await ethers.getContractFactory("Dappcord");
    dappcord = await Dappcord.deploy("Dappcord","DC");
  
  })
  describe("Deployment",function(){
    it("Sets the name",async()=>{
      let result = await dappcord.name();
      expect(result).to.equal("Dappcord");
    })
  })

  describe("Deployment",function(){
    it("Sets the symbol",async()=>{ 
      result = await dappcord.symbol();
      expect(result).to.equal("DC");
    })
  })
})