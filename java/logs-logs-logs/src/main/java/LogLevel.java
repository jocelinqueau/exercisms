public enum LogLevel {
    UNKNOWN(0),
    TRACE(1),
    DEBUG(2),
    INFO(4),
    WARNING(5),
    ERROR(6),
    FATAL(42);

    private final int value;

    LogLevel(int value) {
        this.value = value;
    }

    public int getValue() { 
        System.out.println("value: " + value);
        return value;
    }
}