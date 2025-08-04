function Button() {
    const styles = {
        
        padding: "15px 25px",
        fontSize: "24px",
        textAlign: "center",
        cursor: "pointer",
        outline: "none",
        color: "#fff",
        backgroundColor: "#ff0000",
        border: "none",
        borderRadius: "15px",
        boxShadow: "0 9px #999",
    }

    return(
        <button style={styles} >Stop</button>
    );
}

export default Button