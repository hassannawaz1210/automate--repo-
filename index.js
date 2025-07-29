function createUser(id, name, email) {
    return {
        id: id,
        name: name,
        email: email,
        isActive: true
    };
}
// Example usage
var user1 = createUser(1, "Alice", "alice@example.com");
console.log(user1);
