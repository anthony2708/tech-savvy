import tkinter as tk
from tkinter.colorchooser import askcolor


class WhiteboardApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Python Whiteboard")

        self.canvas = tk.Canvas(root, width=800, height=600, bg="white")
        self.canvas.pack(fill=tk.BOTH, expand=True)

        self.controlFrame = tk.Frame(root)
        self.controlFrame.pack(fill=tk.X, side=tk.TOP)

        self.drawButton = tk.Button(self.controlFrame, text="Draw", command=self.draw)
        self.drawButton.pack(side=tk.LEFT, padx=5, pady=5)

        self.eraseButton = tk.Button(
            self.controlFrame, text="Erase", command=self.erase
        )
        self.eraseButton.pack(side=tk.LEFT, padx=5, pady=5)

        self.clearButton = tk.Button(
            self.controlFrame, text="Clear Canvas", command=self.clearCanvas
        )
        self.clearButton.pack(side=tk.LEFT, padx=5, pady=5)

        self.penButton = tk.Button(
            self.controlFrame, text="Change Pen Color", command=self.changePenColor
        )
        self.penButton.pack(side=tk.LEFT, padx=5, pady=5)

        self.lineWidthLabel = tk.Label(self.controlFrame, text="Line Width:")
        self.lineWidthLabel.pack(side=tk.LEFT, padx=5, pady=5)

        self.lineWidthScale = tk.Scale(
            self.controlFrame,
            from_=1,
            to=10,
            orient=tk.HORIZONTAL,
            command=lambda value: self.changeLineWidth(value),
        )

        self.lineWidthScale.pack(side=tk.LEFT, padx=5, pady=5)

        self.textLabel = tk.Label(self.controlFrame, text="Text:")
        self.textLabel.pack(side=tk.LEFT, padx=5, pady=5)
        self.textArea = tk.Text(self.controlFrame, height=6, width=100)
        self.textArea.pack(side=tk.LEFT, padx=5, pady=5)

        self.drawing = True
        self.erasing = False
        self.drawingColor = "black"
        self.lineWidth = 2
        self.previous_x, self.previous_y = None, None

        self.canvas.bind("<Button-1>", self.startAction)
        self.canvas.bind("<B1-Motion>", self.drawErase)
        self.canvas.bind("<ButtonRelease-1>", self.stopAction)
        self.lineWidthScale.set(self.lineWidth)

    def changePenColor(self):
        color = askcolor()[1]
        if color:
            self.drawingColor = color

    def changeLineWidth(self, value):
        self.lineWidth = int(value)

    def startAction(self, event):
        if self.drawing:
            self.draw(event)
        elif self.erasing:
            self.erase(event)

    def stopAction(self, event):
        if self.drawing:
            self.stopDraw(event)
        elif self.erasing:
            self.stopErase(event)

    def draw(self, event=None):
        self.drawing = True
        self.erasing = False
        if event:
            self.previous_x, self.previous_y = event.x, event.y

    def stopDraw(self, event=None):
        self.drawing = False
        self.erasing = False

    def erase(self, event=None):
        self.erasing = True
        self.drawing = False
        if event:
            self.previous_x, self.previous_y = event.x, event.y

    def stopErase(self, event=None):
        self.erasing = False
        self.drawing = False

    def drawErase(self, event):
        if self.drawing:
            current_x, current_y = event.x, event.y
            if self.previous_x is None:
                self.previous_x = 0
            if self.previous_y is None:
                self.previous_y = 0
            self.canvas.create_line(
                self.previous_x,
                self.previous_y,
                current_x,
                current_y,
                fill=self.drawingColor,
                width=self.lineWidth,
                capstyle=tk.ROUND,
                smooth=True,
            )
            self.previous_x, self.previous_y = current_x, current_y
        elif self.erasing:
            current_x, current_y = event.x, event.y
            self.canvas.create_rectangle(
                current_x - 5,
                current_y - 5,
                current_x + 5,
                current_y + 5,
                fill="white",
                outline="white",
                width=self.lineWidth,
            )

    def clearCanvas(self):
        self.canvas.delete("all")


if __name__ == "__main__":
    root = tk.Tk()
    app = WhiteboardApp(root)
    root.mainloop()
