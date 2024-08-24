import sys

def main():
    if len(sys.argv) > 1 and sys.argv[1] == "message":
        print("It's another Python function!")
    else:
        print("Hello from Python!!!!")

if __name__ == "__main__":
    main()