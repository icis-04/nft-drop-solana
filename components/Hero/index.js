const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-6xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Solana Monkey Business</h1>
        <p className={styles.heroParagraph}>
          *This is NOT a real BYC NFT it is a clone made for Testing!*
        </p>
        <p className={styles.heroParagraph}>
          BYC Collection, popularly known as Bored Ape is an NFT collection in the Etherium Blockchain. In this Test case I am making the collection an NFT in the Solana space, The NFTs were minted with the Solana devnet not on the Mainnet, so all interactions with this NFT should be with the Solana in your devnet wallet.
        </p>
        <p className={styles.heroParagraph}>
          <a href="https://faucet.quicknode.com/solana/devnet"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> Click here </a>
           to get free devnet sol
          
        </p>
        <div className={styles.heroCta}>
        </div>
      </div>
    </main>
  )
}

export default Hero
