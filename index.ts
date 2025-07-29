function createUser(id: number, name: string, email: string): User {
    return {
        id,
        name,
        email,
        isActive: true,
    };
}

// Example usage
const user1 = createUser(1, "Alice", "alice@example.com");
console.log(user1);