import bs58 from 'bs58';
import prompt from 'prompt-sync';
import wallet from './dev-wallet.json';

// Note: Original instructions contained Rust code examples, but since this is a TypeScript project, using similar implementation in Typescript, can also create a rust version if needed


// Define wallet type
type WalletData = {
    privateKey: number[];
};

const promptSync = prompt();

function test_base58_to_wallet(): void {
    console.log("Enter base58 key:");
    const base58: string = promptSync("Enter key: ");    
    const walletArray: Uint8Array = bs58.decode(base58);
    console.log("Wallet array:", Array.from(walletArray));
}

function test_wallet_to_base58(): void {
    const walletArray: Uint8Array = new Uint8Array(wallet as number[]);
    const base58: string = bs58.encode(walletArray);
    console.log("Base58 string:", base58);
}

// Get command line argument
const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

if (!command) {
    console.log("\nPlease specify a command: 'encode' or 'decode'");
    console.log("Usage:");
    console.log("  ts-node walletConversion.ts encode  - Convert wallet to base58");
    console.log("  ts-node walletConversion.ts decode  - Convert base58 to wallet array");
    process.exit(1);
}

// Run selected function based on command
switch (command) {
    case 'encode':
        console.log("\nTesting wallet to base58 conversion:");
        test_wallet_to_base58();
        break;
    case 'decode':
        console.log("\nTesting base58 to wallet conversion:");
        test_base58_to_wallet();
        break;
    default:
        console.log("\nInvalid command. Use 'encode' or 'decode'");
        process.exit(1);
}