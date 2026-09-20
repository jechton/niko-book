#!/usr/bin/env bash
# Usage: scripts/import-chapter.sh "~/Downloads/Chapter 6.md"
# Prints a site-ready chapter to stdout; redirect it into src/content/book/book-1/chapter-N.md.
# Expects line 1 = chapter title, line 2 = subtitle, then one paragraph per line.
set -euo pipefail

n=$(basename "$1" | grep -o '[0-9]\+')

perl -CSD -e '
  my ($n, $date) = @ARGV; shift; shift;
  my $title = <>; my $sub = <>;
  s/\s+$//, s/"/\\"/g for $title, $sub;
  print qq(---\ntitle: "$title"\nsubtitle: "$sub"\npubDate: $date\nart: "b1ch$n.jpg"\n---\n);
  my @p;
  while (<>) {
    s/[\x{201C}\x{201D}]/"/g; s/[\x{2018}\x{2019}]/\x27/g;
    s/^\s+|\s+$//g;
    push @p, $_ if length;
  }
  print join("\n\n", @p), "\n";
' "$n" "$(date +%F)" "$1"
