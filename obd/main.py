import sys

from connection import check_obd_connection
from errors_cleaner import clean_errors
from errors_reader import read_errors

def main():
    if len(sys.argv) > 1:
        command = sys.argv[1]
        port = sys.argv[2] if len(sys.argv) > 2 else None  # Retrieve port argument if available

        if command == "read_errors":
            if port:
                result = read_errors(port)
            else:
                result = "Port is required for reading errors."
            print(result)

        elif command == "check_obd_connection":
            result = check_obd_connection()
            print(result)

        elif command == "clean_errors":
            if port:
                result = clean_errors(port)
            else:
                result = "Port is required for cleaning errors."
            print(result)

        else:
            print("Invalid command provided.")
    else:
        print("No command provided.")

if __name__ == "__main__":
    main()