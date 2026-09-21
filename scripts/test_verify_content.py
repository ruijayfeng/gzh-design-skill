#!/usr/bin/env python3
from verify_content import verify

SOURCE = """# 标题

正文有[来源](https://example.com)，还有**重点**。

![结果图](images/result.png)
"""
GOOD = """<section><p><span leaf="">标题</span></p><p><span leaf="">正文有</span><a href="https://example.com"><span leaf="">来源</span></a><span leaf="">，还有</span><strong><span leaf="">重点</span></strong><span leaf="">。</span></p><span leaf=""><img src="images/result.png"></span></section>"""
BAD_TEXT = GOOD.replace("还有", "没有")
BAD_IMAGE = GOOD.replace("images/result.png", "images/other.png")
assert not verify(SOURCE, GOOD)[0]
assert verify(SOURCE, BAD_TEXT)[0]
assert verify(SOURCE, BAD_IMAGE)[0]
print("verify_content tests passed")
